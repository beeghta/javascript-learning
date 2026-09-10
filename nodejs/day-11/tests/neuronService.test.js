import { jest } from "@jest/globals";

const mockGetNeuronById = jest.fn();

jest.unstable_mockModule("../database/neuronDatabase.js", () => ({
    getAllNeurons: jest.fn(),
    getNeuronById: mockGetNeuronById,
    createNeuron: jest.fn(),
    updateNeuron: jest.fn(),
    deleteNeuron: jest.fn(),
    getFiringNeurons: jest.fn(),
    getNeuronStatus: jest.fn(),
    searchNeurons: jest.fn(),
    getNeuronCount: jest.fn()
}));

const { getNeuronById } =
    await import("../services/neuronService.js");
beforeEach(() => {
    jest.clearAllMocks();
});

test("getNeuronById service should return neuron from mocked database", () => {

    mockGetNeuronById.mockReturnValue({
        id: 101,
        name: "Mock Neuron",
        activity: 0.95
    });

    const result = getNeuronById(101);

    expect(result).toEqual({
        id: 101,
        name: "Mock Neuron",
        activity: 0.95
    });

    expect(mockGetNeuronById).toHaveBeenCalledTimes(1);
    expect(mockGetNeuronById).toHaveBeenCalledWith(101);
});
test("getNeuronById service should return null when neuron does not exist", () => {
    mockGetNeuronById.mockReturnValue(null);

    const result = getNeuronById(999);

    expect(result).toBeNull();

    expect(mockGetNeuronById).toHaveBeenCalledWith(999);
});
test("mock database should return different neurons on different calls", () => {
    mockGetNeuronById
        .mockReturnValueOnce({
            id: 201,
            name: "Neuron Gamma",
            activity: 0.90
        })
        .mockReturnValueOnce({
            id: 202,
            name: "Neuron Delta",
            activity: 0.40
        });

    const firstNeuron = getNeuronById(201);
    const secondNeuron = getNeuronById(202);

    expect(firstNeuron.name).toBe("Neuron Gamma");
    expect(secondNeuron.name).toBe("Neuron Delta");

    expect(mockGetNeuronById).toHaveBeenCalledTimes(2);
    expect(mockGetNeuronById).toHaveBeenNthCalledWith(1, 201);
    expect(mockGetNeuronById).toHaveBeenNthCalledWith(2, 202);
});
test("getNeuronById service should reject when database fails", async () => {
    const databaseError = new Error("Database connection failed");

    mockGetNeuronById.mockRejectedValue(databaseError);

    await expect(getNeuronById(500)).rejects.toThrow(
        "Database connection failed"
    );

    expect(mockGetNeuronById).toHaveBeenCalledTimes(1);
    expect(mockGetNeuronById).toHaveBeenCalledWith(500);
});
test("mock implementation should return different results based on neuron id", async () => {
    mockGetNeuronById.mockImplementation(async (id) => {
        if (id === 700) {
            throw new Error("Database failed");
        }

        return {
            id,
            name: "Test Neuron",
            activity: 0.75
        };
    });

    await expect(getNeuronById(700))
        .rejects
        .toThrow("Database failed");

    const neuron = await getNeuronById(701);

    expect(neuron).toEqual({
        id: 701,
        name: "Test Neuron",
        activity: 0.75
    });

    expect(mockGetNeuronById).toHaveBeenCalledTimes(2);
});