const { chromium } = require('playwright');
const SignupPage = require('../pages/SignupPage');

(async () => {

    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    const signup = new SignupPage(page);

    await page.goto('https://www.demoblaze.com');

    console.log("\n--- USER REGISTRATION TEST STARTED ---\n");

    /* ---------------- POSITIVE TEST ---------------- */
    try {
        await signup.openSignupModal();

        const uniqueUser = "user" + Date.now();

        await signup.register(uniqueUser, "Test@123");

        const alertText = await signup.getAlertText();

        if (alertText.includes("Sign up successful")) {
            console.log("✅ Positive: User registered successfully");
        } else {
            console.log("❌ Positive: Registration failed");
        }

    } catch (error) {
        console.log("❌ Positive scenario error:", error.message);
    }

    await page.waitForTimeout(2000);

    /* ---------------- NEGATIVE 1: Existing Username ---------------- */
    try {
        await signup.openSignupModal();

        await signup.register("existing_user", "123456");

        const alertText = await signup.getAlertText();

        if (alertText.includes("This user already exist")) {
            console.log("✅ Negative: Existing username handled correctly");
        } else {
            console.log("❌ Negative: Unexpected behavior for existing user");
        }

    } catch (error) {
        console.log("❌ Existing username test error:", error.message);
    }

    await page.waitForTimeout(2000);

    /* ---------------- NEGATIVE 2: Empty Username ---------------- */
    try {
        await signup.openSignupModal();

        await signup.register(null, "123456");

        const alertText = await signup.getAlertText();

        console.log("⚠️ Empty username response:", alertText);

    } catch (error) {
        console.log("❌ Empty username test error:", error.message);
    }

    await page.waitForTimeout(2000);

    /* ---------------- NEGATIVE 3: Empty Password ---------------- */
    try {
        await signup.openSignupModal();

        await signup.register("newuser123", null);

        const alertText = await signup.getAlertText();

        console.log("⚠️ Empty password response:", alertText);

    } catch (error) {
        console.log("❌ Empty password test error:", error.message);
    }

    await page.waitForTimeout(2000);

    /* ---------------- NEGATIVE 4: Empty Form ---------------- */
    try {
        await signup.openSignupModal();

        await signup.register(null, null);

        const alertText = await signup.getAlertText();

        console.log("⚠️ Empty form response:", alertText);

    } catch (error) {
        console.log("❌ Empty form test error:", error.message);
    }

    console.log("\n--- TEST COMPLETED ---\n");

    await browser.close();

})();