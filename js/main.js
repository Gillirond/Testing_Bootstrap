/**
 * Created by Igor on 24.10.2017.
 */

function li_changed() {
    var elemview = document.getElementById("blog_view").children;
    var elemsel = document.getElementById("blog_selection").children;
    for(var i=0;i<elemsel.length;i++) {

        if(elemsel[i].children[0].checked == true)
        {
            elemview[i].hidden = false;
        }
        else {
            elemview[i].hidden = true;
        }
    }
}