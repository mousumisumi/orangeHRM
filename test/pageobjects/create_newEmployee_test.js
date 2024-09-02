class createEmployee{

    // elements
    get PIM(){
        return $('span=PIM')
    }

    get addOnPIM(){
        return $('button=Add')
    }

    get firstName(){
        return $('input[name="firstName"]')
    }

    get middleName(){
        return $('input[name="middleName"]')
    }

    get lastName(){
        return $('input[name="lastName"]')
    }

    get employeeID(){
        return $("input[class='oxd-input oxd-input--active']:nth-child(1)")
    }

    get clickToggle(){
        return $('span[class="oxd-switch-input oxd-switch-input--active --label-right"]')
    }

    get username(){
        return $('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)')
    }

    get enabled(){
        return $("input=Enabled")
    }

    get password(){
        return $("div input[class='oxd-input oxd-input--active oxd-input--error']")
    }

    get conPw(){
        return $("div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']")
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
        this.firstName.setValue(firstName)
        this.middleName.setValue(middleName)
        this.lastName.setValue(lastName)
        this.employeeID.setValue(employeeID)
        this.clickToggle.click()   
        this.username.setValue("abcd1234")
        this.enabled.click()
        await browser.pause(3000)
        this.password.setValue("abcd1234")
        await browser.pause(3000)
        this.conPw.setValue("abcd1234")
        await browser.pause(3000)
        this.submit.click()

    
    }
}

export default new createEmployee;