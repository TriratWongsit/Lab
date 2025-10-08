// Contact form validation
const validateContact = (req, res, next) => {
    const { name, email, subject, message, phone, company } = req.body;
    const errors = [];
    
    // TODO: ตรวจสอบ name
    // - ต้องมีค่า
    // - ต้องเป็น string
    // - ความยาวอย่างน้อย 2 ตัวอักษร
    // - ไม่เกิน 100 ตัวอักษร
    
    // TODO: ตรวจสอบ email
    // - ต้องมีค่า  
    // - ต้องเป็น email format ที่ถูกต้อง
    // - ใช้ regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    // TODO: ตรวจสอบ subject
    // - ต้องมีค่า
    // - ความยาวอย่างน้อย 5 ตัวอักษร
    // - ไม่เกิน 200 ตัวอักษร
    
    // TODO: ตรวจสอบ message
    // - ต้องมีค่า
    // - ความยาวอย่างน้อย 10 ตัวอักษร
    // - ไม่เกิน 1000 ตัวอักษร
    
    // TODO: ตรวจสอบ phone (optional)
    // - ถ้ามีค่า ต้องเป็นเบอร์โทรที่ถูกต้อง
    // - ใช้ regex: /^[0-9]{9,10}$/
    
    // TODO: ตรวจสอบ company (optional)
    // - ถ้ามีค่า ต้องไม่เกิน 100 ตัวอักษร
    
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors
        });
    }
    
    // Sanitize data
    req.body.name = req.body.name.trim();
    req.body.email = req.body.email.trim().toLowerCase();
    req.body.subject = req.body.subject.trim();
    req.body.message = req.body.message.trim();
    
    next();
};

// Feedback validation
const validateFeedback = (req, res, next) => {
    const { rating, comment, email } = req.body;
    const errors = [];
    
    // TODO: ตรวจสอบ rating
    // - ต้องมีค่า
    // - ต้องเป็นตัวเลข 1-5
    
    // TODO: ตรวจสอบ comment
    // - ต้องมีค่า
    // - ความยาวอย่างน้อย 5 ตัวอักษร
    // - ไม่เกิน 500 ตัวอักษร
    
    // TODO: ตรวจสอบ email (optional)
    // - ถ้ามีค่า ต้องเป็น email format ที่ถูกต้อง
    
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors
        });
    }
    
    next();
};

module.exports = {
    validateContact,
    validateFeedback
};