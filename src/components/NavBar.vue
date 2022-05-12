<template lang="pt-br">
    <nav class="nav-main">
        <div class="flex justify-around items-center">
          <input class="border rounded-md p-1" type="text" name="search" id="search" >
          <h1 class="text-white text-xl">My Life</h1>
          <ul class="flex flex-row">
             <a href="#" class="text-white">   
               <div class="nav-items flex flex-row"> 
                  <user-circle-icon/> Meu Perfil
               </div>
             </a>  
             <a href="#" class="text-white"> 
               <div class="nav-items flex flex-row"> 
                  <clipboard-list-icon/> Tarefas
               </div>
             </a>
             <a href="#" class="text-white"> 
               <div class="nav-items flex flex-row"> 
                  <building-icon/> Empresa 
               </div>
             </a>
          </ul>
        </div>
    </nav>
</template>
<script>
import {
  UserCircleIcon,
  ClipboardListIcon,
  BuildingSkyscraperIcon,
  BuildingIcon,
  SearchIcon,
} from "vue-tabler-icons";
export default {
  name: "NavBar",
  components: {
    UserCircleIcon,
    ClipboardListIcon,
    BuildingSkyscraperIcon,
    BuildingIcon,
    SearchIcon,
  },
};
</script>

<style scoped>
.nav-main {
  background-image: linear-gradient(
    to right,
    rgb(16, 5, 104),
    rgb(25, 1, 243),
    rgb(33, 17, 177)
  );
  padding: 15px;
}

a + a {
  margin-left: 10px;
}
</style>
