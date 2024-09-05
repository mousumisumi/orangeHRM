import ge from "faker/lib/locales/ge"

class user{

    get logout(){
        return $("a=Logout")
    }

    async user(){
    const value= $("p=Ice Cream")
    await expect(value).toHaveText("Ice Cream")
    }

    async info(){
        const info= $("span=My Info")
        await info.click()
    }

    async genderandblood(){
        const gender= $("label=Female")
        await browser.pause(3000)
        gender.scrollIntoView()
        gender.click()
        await browser.pause(3000)
        const save1= $('(//div[@class="oxd-form-actions"])[1]')
        await save1.click()

        await browser.pause(3000)
        gender.isEnabled()

        const blood=$('(//div[@class="oxd-select-text-input"])[3]')
        blood.click()
        await browser.pause(3000)
        blood.selectByIndex(2)
        await browser.pause(3000)
        const save2= $('(//div[@class="oxd-form-actions"])[2]')
        await save2.click()
        await browser.pause(3000)
        blood.toHaveText("A-")
        await browser.pause(3000)



    }

    async userLogout(){
        const value= $("p=Ice Cream")
        await value.click()
        await this.logout.click()
        }

        
}
export default new user