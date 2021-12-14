$(function(){
    let lg = document.getElementById('lightgallery');
    if (lg){
        lightGallery(lg, {
            //plugins: [],
            licenseKey: '0000-0000-000-0000',
            speed: 500,
            subHtmlSelectorRelative: true,
            //container: '.containder'
            //appendSubHtmlTo: '<div>wedew</div>'
        });

        lg.addEventListener('lgAfterOpen', (event,f) => {
            const index = $('.lg-img-wrap .lg-image').data('index')
            const content = $('.js-gallery-content').eq(index).html()

            console.log('content', index)

            $('.lg-img-wrap .lg-image').replaceWith(content);
            /*self.subHtml = '<button id="slideShowAddImageToCart" @click="addToCart('+event+','+self.currentSelectedImage+','+'\'IMAGE\''+')" class="btn">Add image to cart </button>"';*/
        });

        lg.addEventListener('lgBeforeSlide', (event,f) => {
            const { index, prevIndex } = event.detail;
            const content = $('.js-gallery-content').eq(index).html()

            console.log('content', index)

            setTimeout(() => {
                $('.lg-img-wrap .lg-image').replaceWith(content);
            }, 100)
            /*self.subHtml = '<button id="slideShowAddImageToCart" @click="addToCart('+event+','+self.currentSelectedImage+','+'\'IMAGE\''+')" class="btn">Add image to cart </button>"';*/
        });
    }



    $("#file-upload").change(function(){
        console.log('eferfrfrfr')

        $(".attach__text").text(this.files[0].name);
    });

    if($("#eocjsNewsticker").length){
        setTimeout(function (){
            $("#eocjsNewsticker").eocjsNewsticker({
                speed: 20,
                timeout: 1,
                divider:'+++',
                type:'static'
            });
        }, 300)
    }
})


