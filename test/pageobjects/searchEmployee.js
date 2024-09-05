class searchEmployee{

//elements
get searchEmployeeID(){
    return $('(//input[@class="oxd-input oxd-input--active"])[2]')
}

get submit(){

return $('//button[@type="submit"]')

}




//behaviours

async searchEmployeeAndValidate(number){
        await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
        await this.searchEmployeeID.setValue(number)
        await this.submit.click()
        const searchResult=$('div=045')
        await searchResult.scrollIntoView()
        await expect(searchResult).toHaveText(number)

    }
}

export default new searchEmployee;