class Logout{

    get adminUserElement(){
        return $("//p[@class='oxd-userdropdown-name']")
    }

    get logout(){
        return $("a=Logout")
    }


    async clickOnAdminUser(){
        await this.adminUserElement.click()
        await this.logout.click()

    }
}
export default new Logout;