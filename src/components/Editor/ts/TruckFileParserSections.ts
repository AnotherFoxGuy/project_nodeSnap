/**
 * From RigDef_File.h
 * author: @only_a_ptr
 */
export enum Keyword {
    //KEYWORD_ADD_ANIMATION = 1,
    //KEYWORD_ADVDRAG, // not supported yet
    /*KEYWORD_AIRBRAKES,
    KEYWORD_ANIMATORS,
    KEYWORD_ANTI_LOCK_BRAKES,
    KEYWORD_AXLES,
    KEYWORD_AUTHOR,
    KEYWORD_BACKMESH,*/
    KEYWORD_BEAMS,
    /*KEYWORD_BRAKES,
    KEYWORD_CAB,
    KEYWORD_CAMERARAIL,
    KEYWORD_CAMERAS,
    KEYWORD_CINECAM,
    KEYWORD_COLLISIONBOXES,
    KEYWORD_COMMANDS,
    KEYWORD_COMMANDS2,
    KEYWORD_CONTACTERS,
    KEYWORD_CRUISECONTROL,
    KEYWORD_DESCRIPTION,*/
    KEYWORD_DETACHER_GROUP,
    /*KEYWORD_DISABLEDEFAULTSOUNDS,
    KEYWORD_ENABLE_ADVANCED_DEFORM,
    KEYWORD_END,
    KEYWORD_END_SECTION,
    KEYWORD_ENGINE,
    KEYWORD_ENGOPTION,
    KEYWORD_ENGTURBO,
    KEYWORD_ENVMAP,
    KEYWORD_EXHAUSTS,
    KEYWORD_EXTCAMERA,*/
    KEYWORD_FILEFORMATVERSION,
    KEYWORD_FILEINFO,
    /*
    KEYWORD_FIXES,
    KEYWORD_FLARES,
    KEYWORD_FLARES2,
    KEYWORD_FLEXBODIES,
    KEYWORD_FLEXBODY_CAMERA_MODE,
    KEYWORD_FLEXBODYWHEELS,
    KEYWORD_FORWARDCOMMANDS,
    KEYWORD_FUSEDRAG,*/
    KEYWORD_GLOBALS,
    /*KEYWORD_GUID,
    KEYWORD_GUISETTINGS,
    KEYWORD_HELP,
    KEYWORD_HIDE_IN_CHOOSER,
    KEYWORD_HOOKGROUP, // obsolete, ignored
    KEYWORD_HOOKS,
    KEYWORD_HYDROS,
    KEYWORD_IMPORTCOMMANDS,
    KEYWORD_INTERAXLES,
    KEYWORD_LOCKGROUPS,
    KEYWORD_LOCKGROUP_DEFAULT_NOLOCK,
    KEYWORD_MANAGEDMATERIALS,
    KEYWORD_MATERIALFLAREBINDINGS,
    KEYWORD_MESHWHEELS,
    KEYWORD_MESHWHEELS2,
    KEYWORD_MINIMASS,
    KEYWORD_NODECOLLISION,*/
    KEYWORD_NODES,
    KEYWORD_NODES2,
    /*KEYWORD_PARTICLES,
    KEYWORD_PISTONPROPS,
    KEYWORD_PROP_CAMERA_MODE,
    KEYWORD_PROPS,
    KEYWORD_RAILGROUPS,
    KEYWORD_RESCUER,
    KEYWORD_RIGIDIFIERS,
    KEYWORD_ROLLON,
    KEYWORD_ROPABLES,
    KEYWORD_ROPES,
    KEYWORD_ROTATORS,
    KEYWORD_ROTATORS2,
    KEYWORD_SCREWPROPS,
    KEYWORD_SECTION,
    KEYWORD_SECTIONCONFIG,*/
    KEYWORD_SET_BEAM_DEFAULTS,
    /*KEYWORD_SET_BEAM_DEFAULTS_SCALE,
    KEYWORD_SET_COLLISION_RANGE,
    KEYWORD_SET_DEFAULT_MINIMASS,
    KEYWORD_SET_INERTIA_DEFAULTS,
    KEYWORD_SET_MANAGEDMATS_OPTIONS,*/
    KEYWORD_SET_NODE_DEFAULTS,
    /*KEYWORD_SET_SHADOWS,
    KEYWORD_SET_SKELETON_SETTINGS,
    /*KEYWORD_SHOCKS,
    KEYWORD_SHOCKS2,
    KEYWORD_SHOCKS3,
    KEYWORD_SLIDENODE_CONNECT_INSTANT,
    KEYWORD_SLIDENODES,
    KEYWORD_SLOPE_BRAKE,
    KEYWORD_SOUNDSOURCES,
    KEYWORD_SOUNDSOURCES2,
    //KEYWORD_SOUNDSOURCES3, // not supported yet
    KEYWORD_SPEEDLIMITER,
    KEYWORD_SUBMESH,
    KEYWORD_SUBMESH_GROUNDMODEL,
    KEYWORD_TEXCOORDS,
    KEYWORD_TIES,
    KEYWORD_TORQUECURVE,
    KEYWORD_TRACTION_CONTROL,
    KEYWORD_TRANSFER_CASE,
    KEYWORD_TRIGGERS,
    KEYWORD_TURBOJETS,
    KEYWORD_TURBOPROPS,
    KEYWORD_TURBOPROPS2,
    KEYWORD_VIDEOCAMERA,
    KEYWORD_WHEELDETACHERS,*/
    KEYWORD_WHEELS,
    /*KEYWORD_WHEELS2,
    KEYWORD_WINGS,*/

    /**
     * Editor specific
     */

    KEYWORD_GROUP,
    KEYWORD_COMMENT,

    KEYWORD_INVALID = 0xffffffff
}

export enum Section {
    //	SECTION_AIRBRAKES,
    SECTION_AUTHOR,
    /*	SECTION_ANIMATORS,
	SECTION_ANTI_LOCK_BRAKES,
	SECTION_AXLES,*/
    SECTION_BEAMS,
    /*	SECTION_BRAKES,
	SECTION_CAMERAS,
	SECTION_CAMERA_RAIL,
	SECTION_CINECAM,
	SECTION_COLLISION_BOXES,
	SECTION_COMMANDS,
	SECTION_COMMANDS_2,
	SECTION_CONTACTERS,
	SECTION_ENGINE,
	SECTION_ENGOPTION,
	SECTION_ENGTURBO,
	SECTION_EXHAUSTS,
	SECTION_FIXES,
	SECTION_FLARES,
	SECTION_FLARES_2,
	SECTION_FLEXBODIES,
	SECTION_FLEX_BODY_WHEELS,	
	SECTION_FUSEDRAG,*/
    SECTION_GLOBALS,
    /*SECTION_GUI_SETTINGS,
	SECTION_HELP,
	SECTION_HOOKS,
	SECTION_HYDROS,
	SECTION_INTERAXLES,
	SECTION_LOCKGROUPS,
	SECTION_MANAGED_MATERIALS,
	SECTION_MAT_FLARE_BINDINGS,
	SECTION_MESH_WHEELS,
	SECTION_MESH_WHEELS_2,
	SECTION_MINIMASS,*/
    SECTION_NODES,
    SECTION_NODES_2,
    /*	SECTION_NODE_COLLISION,
	SECTION_PARTICLES,
	SECTION_PISTONPROPS,
	SECTION_PROPS,
	SECTION_RAILGROUPS,
	SECTION_ROPABLES,
	SECTION_ROPES,
	SECTION_ROTATORS,
	SECTION_ROTATORS_2,
	SECTION_SCREWPROPS,
	SECTION_SHOCKS,
	SECTION_SHOCKS_2,
	SECTION_SHOCKS_3,
	SECTION_SLIDENODES,
	SECTION_SOUNDSOURCES,
	SECTION_SOUNDSOURCES2,
	SECTION_SUBMESH,
	SECTION_SLOPE_BRAKE,
	SECTION_TIES,
	SECTION_TORQUE_CURVE,
	SECTION_TRACTION_CONTROL,
	SECTION_TRANSFER_CASE,
	SECTION_TRIGGERS,*/
    SECTION_TRUCK_NAME, ///< The very start of file
    /*	SECTION_TURBOJETS,
	SECTION_TURBOPROPS,
	SECTION_TURBOPROPS_2,
	SECTION_VIDEO_CAMERA,
	SECTION_WHEELDETACHERS,*/
    SECTION_WHEELS,
    /*SECTION_WHEELS_2,
	SECTION_WINGS,*/

    SECTION_NONE, ///< Right after rig name, for example.

    /**
     * Editor specific
     */

    SECTION_UNKNOWN,

    SECTION_INVALID = 0xffffffff
}
