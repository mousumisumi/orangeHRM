import loginToOrangeHRM from "../pageobjects/login_Page_test.js";
import createEmployee from "../pageobjects/create_newEmployee_test.js";


describe('Login Page', () => {
    it('Land on the page and have dashboard', async () => {
        // await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await loginToOrangeHRM.landOnURL()
        await loginToOrangeHRM.login("Admin","admin123")
        await expect(browser).toHaveUrl("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    })

    it('Create new Employee', async () => {
        await createEmployee.clickPIM();
        await createEmployee.clickAddonPIM()
        await browser.pause()
        await createEmployee.addEmployee("Mousumi","Akter","Sumi","0234")
        await browser.pause(5000)

        // const name;
        // const firstName=faker.name.firstName();
        // console.log(firstName)

        // const onLogin = fn()
        // render(<LoginForm onLogin={onLogin} />)
        // await $('input[name="firstName"]').setValue('Akter')
        // await $('input[name="middleName"]').setValue('Akter')
        // await $('input[name="lastName"]').setValue('Sumi')
        // await browser.keys(Key.Enter)

        // /**
        //  * verify the handler was called
        //  */
        // expect(onLogin).toBeCalledTimes(1)
        // expect(onLogin).toBeCalledWith(expect.equal({
        //     firstName: 'Akter',
        //     middleName: 'Akter',
        //     lastName: 'Sumi'
        // })) 
        

    })
})

