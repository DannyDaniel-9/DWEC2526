function edad(){

    var elementoSegunEdad = document.getElementById("uno");
    elementoSegunEdad.style.backgroundColor="blue";

    var edad = prompt("Cuantos años tienes");
    console.log(edad);

    if(edad>=18){
        console.log("Ya eres mayor de edad");  
        elementoSegunEdad.style.backgroundImage = "url(https://imgs.search.brave.com/3y2khpgNHnsKpnSufkrslk-JhqUdN-HuHhstMIfM29o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9sYS5jb20vaG9y/aXpvbi9sYW5kc2Nh/cGUvNDc2NDhlMzgz/NGFlLW9yZWphLTMu/anBn)";     
    }else if(edad >=12){
        console.log("Eres adolescente");
        elementoSegunEdad.style.backgroundImage = "url(https://imgs.search.brave.com/gGAT7Ryt8GdDgUcJoZeoQBClhRZOIJT1-58YW-6Pc3I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbGlua2luLXBh/cmstNGstYjJ1MmVk/OHBzdnpsamMwMi5q/cGc)";

    }else{
        console.log("eres un niño");
        elementoSegunEdad.style.backgroundImage = "url(https://imgs.search.brave.com/gQ8EZPTOd_URHvfAN3BLKEfe09xiZ6PpqwfF0Cb1t_8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dW5hcGxhdXNvLmNv/bS9pbWFnZXMvYW51/bmNpb3MvMC84Lzcv/MDg3X2JvdGFyZ2Fz/LXNob3ctaW5mYW50/aWwtcGVwcGEtanBn/XzMzLmpwZw)";
    }
}