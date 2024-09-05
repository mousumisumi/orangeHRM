import loginToOrangeHRM from "../pageobjects/login_Page_test.js";
import createEmployee from "../pageobjects/create_newEmployee_test.js";
import searchEmployee from "../pageobjects/searchEmployee.js";
import Directory from "../pageobjects/Directory.js";
import logout from "../pageobjects/logout.js";
import userlogin from "../pageobjects/userlogin.js";


describe('Login Page', () => {
    // it('Land on the page and have dashboard', async () => {
    //     await loginToOrangeHRM.landOnURL()
    //     await loginToOrangeHRM.login("Admin","admin123")
    // })

    // it('Create new Employee', async () => {
    //     await createEmployee.clickPIM();
    //     await createEmployee.clickAddonPIM()
    //     await createEmployee.addEmployee("Ice","and","Cream","045")
    //     await createEmployee.employeeValidation("Ice Cream")

    // })
    
    // it('Search Employee By ID', async () => {
    //     await searchEmployee.searchEmployeeAndValidate("045")
    //     await browser.pause(5000)

    // })

    // it('Search Employee By Name', async () => {
    //     await Directory.landOnDashboard()
    //     await Directory.clickOnDirectory()
    //     await Directory.searchByName()
    //     await browser.pause(5000)

    // })

    // it('Logout from Admin panel', async () => {
    //     await logout.clickOnAdminUser()
    //     await browser.pause(5000)

    // })

    it('Login as User and Logout', async () => {
        await loginToOrangeHRM.landOnURL()
        await loginToOrangeHRM.login("iceCream012","abcd1234")
        await userlogin.user()
        await userlogin.info()
        await userlogin.genderandblood()
        await userlogin.userLogout()

    })
    
})

