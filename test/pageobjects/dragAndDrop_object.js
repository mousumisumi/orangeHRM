class dragandDrop{

    get dragElement(){
        return $('//button[@id="drag_source"]')
    }

    get dropElement(){
        return $('//div[@id="drop_target"]')
    }

    get hoverOver(){
        return $('//button[@class="dropbtn"]')
    }


    async landOnUrl(){
        await browser.url("https://play1.automationcamp.ir/mouse_events.html")
    }

    // async dragPieceAndDrop(){
    //     const selectElementToDrag= await this.dragElement
    //     const whereToDrop=await this.dropElement
    //     await selectElementToDrag.scrollIntoView();
    //     await selectElementToDrag.dragAndDrop(whereToDrop)
    //     await this.hoverOver.moveTo()

    // }

    async dropdown(){
        await browser.url("https://play1.automationcamp.ir/forms.html")
        const placeOfDropDown= $("#select_tool")
        // Visible Text
        await placeOfDropDown.selectByVisibleText("Protractor")
        await placeOfDropDown.selectByIndex(0)
        await placeOfDropDown.selectByAttribute("value","cyp")


    }
}


export default new dragandDrop;