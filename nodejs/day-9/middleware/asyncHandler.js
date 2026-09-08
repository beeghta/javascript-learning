const asyncHandler = (handler) => {
    return (request, response, next) => {
        Promise
            .resolve(handler(request, response, next))
            .catch(next);
    };
};

export default asyncHandler;