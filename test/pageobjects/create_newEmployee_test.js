class createEmployee{

    // elements
    get PIM(){
        return $('span=PIM')
    }

    get addOnPIM(){
        return $('button=Add')
    }

    get firstName(){
        return $('//input[@name="firstName"]')
    }

    get middleName(){
        return $('//input[@name="middleName"]')
    }

    get lastName(){
        return $('//input[@name="lastName"]')
    }

    get employeeID(){
        return $("(//input[@class='oxd-input oxd-input--active'])[2]")
    }

    get employeeID2(){
        return $("(//input[@class='oxd-input oxd-input--active'])[2]")
    }

    get clickToggle(){
        return $('//span[@class="oxd-switch-input oxd-switch-input--active --label-right"]')
    }

    get username(){
        return $('//div[@class="oxd-input-group oxd-input-field-bottom-space"]//child::div//child::input[@class="oxd-input oxd-input--active" and @autocomplete="off"]')
    }

    get enabled(){
        return $("label=Enabled")
    }

    get password(){
        return $('//div[@class="oxd-grid-item oxd-grid-item--gutters user-password-cell"]//child::div[@class="oxd-input-group oxd-input-field-bottom-space"]//child::div//child::input[@class="oxd-input oxd-input--active" and @autocomplete="off" and@type="password"]')
    }

    get conPw(){
        return $('//div[@class="oxd-grid-item oxd-grid-item--gutters"]//child::div[@class="oxd-input-group oxd-input-field-bottom-space"]//child::div//child::input[@class="oxd-input oxd-input--active" and @autocomplete="off" and@type="password"]')
    }

    get submit(){
        return $("button=Save")
    }



    // behaviors
    async clickPIM(){
        this.PIM.click()
    }
    
    async clickAddonPIM (){
        this.addOnPIM.click()
    }

    async addEmployee(firstName, middleName, lastName, employeeID)
    {
        await this.firstName.setValue(firstName)
        await this.middleName.setValue(middleName)
        await this.lastName.setValue(lastName)
        const add= this.employeeID
        await add.click()
        await add.doubleClick()
        await browser.pause(3000)
        await browser.keys('Delete')
        await browser.pause(3000)

        await add.setValue(employeeID)
        await browser.pause(3000)

        await this.clickToggle.click()   
        await this.username.setValue("iceCream012")
        await this.enabled.click()
        await this.password.setValue("abcd1234")
        await this.conPw.setValue("abcd1234")
        await this.submit.click()

    
    }

    async employeeValidation(name){
        const emplyeeAddedValidation= $('//h6[@class="oxd-text oxd-text--h6 --strong"]')
        await expect(emplyeeAddedValidation).toHaveText(name)
        const url= await browser.getUrl()
        await expect(url).toContain("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber")
        // const id= $("(//input[@class='oxd-input oxd-input--active'])[3]")
        // const idValue=await id.getText()
        // console.log(idValue)


    }

    
}

export default new createEmployee;