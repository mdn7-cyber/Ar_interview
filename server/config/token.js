import jwt from "jsonwebtoken"

const genToken = async (userId, email) => {
    try {

        let expiry = "7d"  // default

        if (email === "mdn36074@gmail.com") {
            expiry = "30d"   // 👈 sirf is user ke liye increase
        }

        const token = jwt.sign(
            { userId },
            process.env.JWT_SECRET,
            { expiresIn: expiry }
        )

        return token

    } catch (error) {
        console.log(error)
    }
}

export default genToken