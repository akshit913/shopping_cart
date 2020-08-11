$(function() {
    let productName = $('#productName')
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')
    $('#btn_add').click(function() {
        addProduct(productName.val(),productManufacturer.val(),productPrice.val(),
        function(addedProduct) {
            window.alert("Added " + addedProduct.name + " to the database")
        })
    })
})