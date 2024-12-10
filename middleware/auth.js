const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, "ABCabc123");
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Please authenticate' });
    }
};

module.exports = auth;