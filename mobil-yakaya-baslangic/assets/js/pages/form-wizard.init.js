$(function(){
    $("#basic-example").steps({headerTag:"h3",bodyTag:"section",transitionEffect:"fade"}),
    $("#vertical-wizard1").steps({headerTag:"h3",bodyTag:"section",transitionEffect:"fade",stepsOrientation:"vertical",enableAllSteps:true,enablePagination:true,saveState:true,
    /* Labels */
    labels: {
        cancel: "İptal",
        current: "şimdiki adım:",
        pagination: "Sayfalar",
        finish: "Son",
        next: "İleri",
        previous: "Geri",
        loading: "Yükleniyor..."
}}),
$("#vertical-wizard2").steps({headerTag:"h3",bodyTag:"section",transitionEffect:"fade",stepsOrientation:"vertical",enableAllSteps:true,enablePagination:true,saveState:true,
/* Labels */
labels: {
    cancel: "İptal",
    current: "şimdiki adım:",
    pagination: "Sayfalar",
    finish: "Son",
    next: "İleri",
    previous: "Geri",
    loading: "Yükleniyor..."
}}),
$("#vertical-wizard3").steps({headerTag:"h3",bodyTag:"section",transitionEffect:"fade",stepsOrientation:"vertical",enableAllSteps:true,enablePagination:true,saveState:true,
/* Labels */
labels: {
    cancel: "İptal",
    current: "şimdiki adım:",
    pagination: "Sayfalar",
    finish: "Son",
    next: "İleri",
    previous: "Geri",
    loading: "Yükleniyor..."
}})
});