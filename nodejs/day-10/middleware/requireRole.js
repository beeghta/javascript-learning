const requireRole = (role) => {
    return (request, response, next) => {

        if (request.user.role !== role) {
            return response.status(403).json({
                success: false,
                error: "Access denied"
            });
        }

        next();
    };
};

export default requireRole;