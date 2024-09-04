class dragandDrop{

    get dragElement(){
        return $('//button[@id="drag_source"]')
    }

    get dropElement(){
        return $('//div[@id="drop_target"]')
    }


    async landOnUrl(){
        await browser.url("https://play1.automationcamp.ir/mouse_events.html")
    }

    async dragPieceAndDrop(){
        const selectElementToDrag= await this.dragElement
        const whereToDrop=await this.dropElement
        selectElementToDrag.scrollIntoView();
        selectElementToDrag.dragAndDrop(whereToDrop)

    }
}


export default new dragandDrop;