class Directory{
    // elements
    get directoryElement(){
        return $('span=Directory')
    }

    get employeeNameElement(){
        return $("//input[@placeholder='Type for hints...']")
    }

    get submitElement(){
        return $("button=Search")
    }


    //behavior
    async landOnDashboard(){
        await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    }

    async clickOnDirectory(){
        await this.directoryElement.click()
    }

    async searchByName(){
        await this.employeeNameElement.setValue("Ice and Cream")
        await this.submitElement.click()
        const value= $("p=Ice and Cream")
        await expect(value).toHaveText("Ice and Cream")
    }



}
export default new Directory;