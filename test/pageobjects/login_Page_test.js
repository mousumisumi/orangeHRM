class loginToOrangeHRM{

    //elements
    get username(){
        return $('input[name="username"]')
    }

    get password(){
        return $('input[name="password"]')
    }

    get loginClick(){
        return $('button[type="submit"]')
    }




    async landOnURL(){
        await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await browser.pause(3000);
    }

    async login(username,password)
    {
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.loginClick.click()
    }

}

export default new loginToOrangeHRM;