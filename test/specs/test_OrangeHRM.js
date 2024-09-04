import loginToOrangeHRM from "../pageobjects/login_Page_test.js";
import createEmployee from "../pageobjects/create_newEmployee_test.js";
import searchEmployee from "../pageobjects/searchEmployee.js";


describe('Login Page', () => {
    it('Land on the page and have dashboard', async () => {
        // await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await loginToOrangeHRM.landOnURL()
        await loginToOrangeHRM.login("Admin","admin123")
        await expect(browser).toHaveUrl("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    })

    // it('Create new Employee', async () => {
    //     await createEmployee.clickPIM();
    //     await createEmployee.clickAddonPIM()
    //     await browser.pause(5000)
    //     await createEmployee.addEmployee("Mousumi","Akter","Sumi","396")
    //     await createEmployee.employeeValidation("Mousumi Sumi")
    //     await browser.pause(5000)

    // })
    
    it('Search Employee', async () => {
        await searchEmployee.searchEmployeeAndValidate("0422396")
        await browser.pause(5000)

    })
})

