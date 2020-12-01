/**
 * This is a configuration file, feel free to edit options below.
 * By default most recommended options has been set for your documentation
 * (default options depends on the documentation size and template preferences).
 *
 * To apply changes made in config.json.js you have a few options:
 * - customize template, set configuration and export customized template,
 * - or change the "v" query param in the exported index.html file:
 *   <script src="config.json.js?v=<NEW_RANDOM_STRING>"></script>
 * - or open index.html and press ctrl + f5 to reload configuration (not recommended).
 */
window.userConfig = {

    /**
     * After refreshing the page or opening the same documentation
     * after a while, menu tree restore to the latest state.
     *
     * This option is automatically disabled for huge documentations
     * because it's a time consumed operation for large data files.
     */
    rememberMenuTreeState: true,

    /**
     * If option is enabled then scroll of the menu tree will be
     * adjusted after every link click in such way that clicked
     * element will be visible in the menu tree.
     */
    scrollMenuOnClick: true,

    /**
     * The height of a logo in the sidebar.
     *
     * Height must be set to avoid layout jumping after loading the image.
     * This also gives a possibility to scale high resolution image.
     */
    logoHeight: 30,

};
