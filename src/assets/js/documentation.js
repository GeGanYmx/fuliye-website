$(
    function(){
        //M区域下载
        $("#m_brochures").click(function (e) { 
            e.preventDefault();
            window.location.href="./download/m_brochures.zip"; 
        });
        $("#m_photos").click(function (e) { 
            e.preventDefault();
            window.location.href="./download/m_photos.zip"; 
        });
        $("#m_materials_pdf").click(function (e) { 
            e.preventDefault();
            window.location.href="./download/m_materials_pdf.zip"; 
        });
        $("#m_video").click(function (e) { 
            e.preventDefault();
            window.open("https://youtu.be/BRnNNJVMO_w")
        });

        //X2 区域下载
        $("#x_brochure").click(function (e) { 
            e.preventDefault();
            window.location.href="./download/x_brochure.zip"; 
        });
        $("#x_photos").click(function (e) { 
            e.preventDefault();
            window.location.href="./download/x_photos.zip"; 
        });
        $("#x_guide").click(function (e) { 
            e.preventDefault();
            window.location.href="./download/x_guide.zip"; 
        });
        $("#x_video").click(function (e) { 
            e.preventDefault();
            window.open("https://m.youtube.com/watch?v=m744M7C-DQI")
        });
    }
)