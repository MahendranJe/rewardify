export const generateOTP = async (data) => {
    const response = await fetch("https://rewardify.dotcod.in/api/v1/store-user/auth/generate-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to generate OTP");
    }

    return await response.json();
};

export const verfifyOtp = async (data) => {
    const response = await fetch("https://rewardify.dotcod.in/api/v1/store-user/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),

    });

    if (!response.ok) {
        throw new Error("OTP is not correct")
    }
    return await response.json();
}
