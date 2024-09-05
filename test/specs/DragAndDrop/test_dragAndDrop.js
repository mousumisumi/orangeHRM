import dragandDrop from "../../pageobjects/dragAndDrop_object.js"
describe("Drag and Drop test", ()=>{

    it("drag kore drop koro",async ()=>{
        // await dragandDrop.landOnUrl();
        // await browser.pause(3000)
        // await dragandDrop.dragPieceAndDrop();
        // await browser.pause(3000)

        await dragandDrop.dropdown()
        await browser.pause(5000)

    })

})