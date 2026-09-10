import request from "supertest";
import app from "../index.js";


describe("Neuron API", () => {


    // =========================================================
    // Root API
    // =========================================================

    describe("Root API", () => {

        test("GET / should return welcome message", async () => {

            const response = await request(app)
                .get("/");

            expect(response.statusCode).toBe(200);
            expect(response.text).toBe("Welcome to Neuron API");
        });

    });


    // =========================================================
    // GET /neurons
    // =========================================================

    describe("GET /api/v1/neurons", () => {

        test("should return neurons", async () => {

            const response = await request(app)
                .get("/api/v1/neurons");

            expect(response.statusCode).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data).toBeDefined();
            expect(Array.isArray(response.body.data)).toBe(true);
        });


        test("should return a neuron by ID", async () => {

            const createResponse = await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "Test GET Neuron",
                    activity: 0.75
                });

            const neuronId = createResponse.body.id;

            const response = await request(app)
                .get(`/api/v1/neurons/${neuronId}`);

            expect(response.statusCode).toBe(200);
            expect(response.body.id).toBe(neuronId);
            expect(response.body.name).toBe("Test GET Neuron");
            expect(response.body.activity).toBe(0.75);
        });


        test("should return 404 for unknown neuron", async () => {

            const response = await request(app)
                .get("/api/v1/neurons/99999");

            expect(response.statusCode).toBe(404);
            expect(response.body.success).toBe(false);
            expect(response.body.error).toBe("Neuron not found");
        });


        test("should return paginated neurons", async () => {

            const response = await request(app)
                .get("/api/v1/neurons")
                .query({
                    page: 1,
                    limit: 2
                });

            expect(response.statusCode).toBe(200);

            expect(response.body.success).toBe(true);
            expect(response.body.data).toBeDefined();
            expect(Array.isArray(response.body.data)).toBe(true);

            expect(response.body.pagination).toBeDefined();
            expect(response.body.pagination.page).toBe(1);
            expect(response.body.pagination.limit).toBe(2);

            expect(response.body.data.length).toBeLessThanOrEqual(2);
        });


        test("should return second page", async () => {

            const response = await request(app)
                .get("/api/v1/neurons")
                .query({
                    page: 2,
                    limit: 2
                });

            expect(response.statusCode).toBe(200);

            expect(response.body.success).toBe(true);
            expect(Array.isArray(response.body.data)).toBe(true);

            expect(response.body.pagination).toBeDefined();
            expect(response.body.pagination.page).toBe(2);
            expect(response.body.pagination.limit).toBe(2);

            expect(response.body.data.length).toBeLessThanOrEqual(2);
        });

    });


    // =========================================================
    // POST /neurons
    // =========================================================

    describe("POST /api/v1/neurons", () => {

        test("should create a neuron", async () => {

            const response = await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "Test POST Neuron",
                    activity: 0.85
                });

            expect(response.statusCode).toBe(201);
            expect(response.body.id).toBeDefined();
            expect(response.body.name).toBe("Test POST Neuron");
            expect(response.body.activity).toBe(0.85);
        });


        test("should reject invalid activity", async () => {

            const response = await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "Invalid Neuron",
                    activity: 2
                });

            expect(response.statusCode).toBe(400);
            expect(response.body.success).toBe(false);
            expect(response.body.error).toBe(
                "Activity must be a number between 0 and 1"
            );
        });


        test("should reject missing name", async () => {

            const response = await request(app)
                .post("/api/v1/neurons")
                .send({
                    activity: 0.70
                });

            expect(response.statusCode).toBe(400);
            expect(response.body.success).toBe(false);
            expect(response.body.error).toBe(
                "Name is required and must be a string"
            );
        });


        test("should reject non-string name", async () => {

            const response = await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: 12345,
                    activity: 0.70
                });

            expect(response.statusCode).toBe(400);
            expect(response.body.success).toBe(false);
            expect(response.body.error).toBe(
                "Name is required and must be a string"
            );
        });


        test("should reject missing activity", async () => {

            const response = await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "Missing Activity Neuron"
                });

            expect(response.statusCode).toBe(400);
            expect(response.body.success).toBe(false);
            expect(response.body.error).toBe(
                "Activity must be a number between 0 and 1"
            );
        });

    });


    // =========================================================
    // PUT /neurons/:id
    // =========================================================

    describe("PUT /api/v1/neurons/:id", () => {

        test("should update a neuron", async () => {

            const createResponse = await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "Neuron Before Update",
                    activity: 0.50
                });

            const neuronId = createResponse.body.id;

            const response = await request(app)
                .put(`/api/v1/neurons/${neuronId}`)
                .send({
                    name: "Neuron After Update",
                    activity: 0.91
                });

            expect(response.statusCode).toBe(200);
            expect(response.body.id).toBe(neuronId);
            expect(response.body.name).toBe("Neuron After Update");
            expect(response.body.activity).toBe(0.91);
        });


        test("should return 404 for unknown neuron", async () => {

            const response = await request(app)
                .put("/api/v1/neurons/99999")
                .send({
                    name: "Unknown Neuron",
                    activity: 0.80
                });

            expect(response.statusCode).toBe(404);
            expect(response.body.success).toBe(false);
            expect(response.body.error).toBe("Neuron not found");
        });


        test("should reject invalid activity", async () => {

            const createResponse = await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "PUT Validation Neuron",
                    activity: 0.50
                });

            const neuronId = createResponse.body.id;

            const response = await request(app)
                .put(`/api/v1/neurons/${neuronId}`)
                .send({
                    name: "Updated Invalid Neuron",
                    activity: 1.5
                });

            expect(response.statusCode).toBe(400);
            expect(response.body.success).toBe(false);
            expect(response.body.error).toBe(
                "Activity must be a number between 0 and 1"
            );
        });


        test("should reject non-string name", async () => {

            const createResponse = await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "PUT Name Validation",
                    activity: 0.60
                });

            const neuronId = createResponse.body.id;

            const response = await request(app)
                .put(`/api/v1/neurons/${neuronId}`)
                .send({
                    name: 12345,
                    activity: 0.80
                });

            expect(response.statusCode).toBe(400);
            expect(response.body.success).toBe(false);
            expect(response.body.error).toBe(
                "Name is required and must be a string"
            );
        });

    });


    // =========================================================
    // DELETE /neurons/:id
    // =========================================================

    describe("DELETE /api/v1/neurons/:id", () => {

        test("should delete a neuron", async () => {

            const createResponse = await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "Neuron To Delete",
                    activity: 0.55
                });

            const neuronId = createResponse.body.id;

            const deleteResponse = await request(app)
                .delete(`/api/v1/neurons/${neuronId}`);

            expect(deleteResponse.statusCode).toBe(204);

            const getResponse = await request(app)
                .get(`/api/v1/neurons/${neuronId}`);

            expect(getResponse.statusCode).toBe(404);
            expect(getResponse.body.success).toBe(false);
            expect(getResponse.body.error).toBe("Neuron not found");
        });


        test("should return 404 for unknown neuron", async () => {

            const response = await request(app)
                .delete("/api/v1/neurons/99999");

            expect(response.statusCode).toBe(404);
            expect(response.body.success).toBe(false);
            expect(response.body.error).toBe("Neuron not found");
        });

    });


    // =========================================================
    // Firing Neurons
    // =========================================================

    describe("GET /api/v1/neurons/firing", () => {

        test("should return firing neurons", async () => {

            const response = await request(app)
                .get("/api/v1/neurons/firing");

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);

            response.body.forEach((neuron) => {
                expect(neuron.activity).toBeGreaterThanOrEqual(0.8);
            });
        });

    });


    // =========================================================
    // Search Neurons
    // =========================================================

    describe("GET /api/v1/neurons/search", () => {

        test("should filter neurons", async () => {

            const response = await request(app)
                .get("/api/v1/neurons/search")
                .query({
                    minActivity: 0.8
                });

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);

            response.body.forEach((neuron) => {
                expect(neuron.activity).toBeGreaterThanOrEqual(0.8);
            });
        });


        test("should sort neurons by activity", async () => {

            await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "Sort Neuron Low",
                    activity: 0.30
                });

            await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "Sort Neuron High",
                    activity: 0.90
                });

            const response = await request(app)
                .get("/api/v1/neurons/search")
                .query({
                    minActivity: 0,
                    sort: "activity"
                });

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);

            for (let i = 1; i < response.body.length; i++) {

                expect(response.body[i].activity)
                    .toBeGreaterThanOrEqual(
                        response.body[i - 1].activity
                    );
            }
        });


        test("should sort neurons by activity descending", async () => {

            await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "Descending Neuron Low",
                    activity: 0.20
                });

            await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "Descending Neuron High",
                    activity: 0.95
                });

            const response = await request(app)
                .get("/api/v1/neurons/search")
                .query({
                    minActivity: 0,
                    sort: "-activity"
                });

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);

            for (let i = 1; i < response.body.length; i++) {

                expect(response.body[i].activity)
                    .toBeLessThanOrEqual(
                        response.body[i - 1].activity
                    );
            }
        });

    });


    // =========================================================
    // Neuron Status
    // =========================================================

    describe("GET /api/v1/neurons/:id/status", () => {

        test("should return neuron status as firing", async () => {

            const createResponse = await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "Status Test Neuron",
                    activity: 0.90
                });

            const neuronId = createResponse.body.id;

            const response = await request(app)
                .get(`/api/v1/neurons/${neuronId}/status`);

            expect(response.statusCode).toBe(200);
            expect(response.body.id).toBe(neuronId);
            expect(response.body.name).toBe("Status Test Neuron");
            expect(response.body.status).toBe("firing");
        });


        test("should return inactive status", async () => {

            const createResponse = await request(app)
                .post("/api/v1/neurons")
                .send({
                    name: "Inactive Test Neuron",
                    activity: 0.40
                });

            const neuronId = createResponse.body.id;

            const response = await request(app)
                .get(`/api/v1/neurons/${neuronId}/status`);

            expect(response.statusCode).toBe(200);
            expect(response.body.id).toBe(neuronId);
            expect(response.body.name).toBe("Inactive Test Neuron");
            expect(response.body.status).toBe("inactive");
        });


        test("should return 404 for unknown neuron", async () => {

            const response = await request(app)
                .get("/api/v1/neurons/99999/status");

            expect(response.statusCode).toBe(404);
            expect(response.body.success).toBe(false);
            expect(response.body.error).toBe("Neuron not found");
        });

    });

});