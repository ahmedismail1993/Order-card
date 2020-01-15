
<script>
export default {
    name:"routeList",
    functional:true,
    render(createElment,{props:{routes}}) {
        return routes.map(route=>{
            return(

                <li key={route.name}>
                <router-link to={route.route}>
                    {route.text}
                </router-link>
                </li>
            )
        })
    },
 
   
}
</script>