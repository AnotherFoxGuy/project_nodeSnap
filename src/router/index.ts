import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Projects from "../views/Main/Projects.vue";
import Editor from "../views/Main/Editor.vue";
import Modals from "../views/Modals/Modals.vue";
import Settings from "../views/Modals/Settings.vue";
import RenameGrp from "../views/Modals/Groups/RenameGrp.vue";
import AddGrp from "../views/Modals/Groups/AddGrp.vue";

const routes: Array<RouteRecordRaw> = [
    /**
     * Main pages
     */
    {
        path: "/",
        name: "Projects",
        component: Projects
    },
    {
        path: "/Editor",
        name: "Editor",
        component: Editor
    },

    /**
     * Modals, that will be open in an other renderer page using electron
     */
    {
        path: "/Modals",
        name: "Modals",
        component: Modals,
        children: [
            {
                path: "Settings",
                component: Settings
            },
            {
                path: "Groups/Rename",
                component: RenameGrp
            },
            {
                path: "Groups/Add",
                component: AddGrp
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
