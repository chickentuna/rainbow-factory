/* global PIXI */

export async function load() {

    const promise = new Promise(function (resolve, reject) {
        const sheetURL = "assets/cubes.json"
        PIXI.loader.add(sheetURL).load(
            resolve
        );
    });

    await promise

}

