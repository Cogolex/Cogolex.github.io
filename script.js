document.addEventListener('DOMContentLoaded', () => {

    // --- DATA with Categories ---
    // This is the complete and corrected list of stratagems, each with a category
    // to enforce logical loadout rules.
    const stratagems = [
        // Category: 'weapon' (Support Weapons, Max 1 per loadout)
        { name: "MG-43 Machine Gun", name_es: "Ametralladora MG-43", icon_path: "Machine_Gun_Stratagem_Icon.png", category: "weapon" },
        { name: "APW-1 Anti-Materiel Rifle", name_es: "Rifle Antimatérial APW-1", icon_path: "Anti-Materiel_Rifle_Stratagem_Icon.png", category: "weapon" },
        { name: "M-105 Stalwart", name_es: "M-105 Leal", icon_path: "Stalwart_Stratagem_Icon.png", category: "weapon" },
        { name: "FLAM-40 Flamethrower", name_es: "Lanzallamas FLAM-40", icon_path: "Flamethrower_Stratagem_Icon.png", category: "weapon" },
        { name: "MG-206 Heavy Machine Gun", name_es: "Ametralladora Pesada MG-206", icon_path: "Heavy_Machine_Gun_Icon.png", category: "weapon" },
        { name: "RS-422 Railgun", name_es: "Cañón de Riel RS-422", icon_path: "Railgun_Stratagem_Icon.png", category: "weapon" },
        { name: "GL-21 Grenade Launcher", name_es: "Lanzagranadas GL-21", icon_path: "Grenade_Launcher_Stratagem_Icon.png", category: "weapon" },
        { name: "LAS-98 Laser Cannon", name_es: "Cañón Láser LAS-98", icon_path: "Laser_Cannon_Stratagem_Icon.png", category: "weapon" },
        { name: "ARC-3 Arc Thrower", name_es: "Lanzaarcos ARC-3", icon_path: "Arc_Thrower_Stratagem_Icon.png", category: "weapon" },
        { name: "LAS-99 Quasar Cannon", name_es: "Cañón Quasar LAS-99", icon_path: "Quasar_Cannon_Icon.png", category: "weapon" },
        { name: "TX-41 Sterilizer", name_es: "Esterilizador TX-41", icon_path: "Sterilizer_Stratagem_Icon.png", category: "weapon" },
        { name: "GL-52 De-Escalator", name_es: "Desescalador GL-52", icon_path: "GL-52_De-Escalator_Stratagem_Icon.png", category: "weapon" },
        { name: "CQC-1 One True Flag", name_es: "Una Única Bandera CQC-1", icon_path: "CQC-1_One_True_Flag_Stratagem_Icon.png", category: "weapon" },

        // Category: 'backpackWeapon' (Max 1 per loadout. No backpacks nor weapons if this appears)
        { name: "GR-8 Recoilless Rifle", name_es: "Rifle sin Retroceso GR-8", icon_path: "Recoilless_Rifle_Stratagem_Icon.png", category: "backpackWeapon" },
        { name: "AC-8 Autocannon", name_es: "Cañón Automático AC-8", icon_path: "Autocannon_Stratagem_Icon.png", category: "backpackWeapon" },
        { name: "RL-77 Airburst Rocket Launcher", name_es: "Lanzacohetes de Explosión Aérea RL-77", icon_path: "Airburst_Rocket_Launcher_Icon.png", category: "backpackWeapon" },
        { name: "FAF-14 Spear", name_es: "Lanza FAF-14", icon_path: "Spear_Stratagem_Icon.png", category: "backpackWeapon" },
        { name: "StA-X3 W.A.S.P. Launcher", name_es: "Lanzador StA-X3 W.A.S.P.", icon_path: "StA-X3_W.A.S.P._Launcher_Stratagem_Icon.png", category: "backpackWeapon" },

        // Category: 'expendable_weapon' (Not limited like standard weapons)
        { name: "EAT-17 Expendable Anti-Tank", name_es: "Antitanque Desechable EAT-17", icon_path: "Expendable_Anti-Tank_Stratagem_Icon.png", category: "expendable_weapon" },
        { name: "MLS-4X Commando", name_es: "Comando MLS-4X", icon_path: "Commando_Stratagem_Icon.png", category: "expendable_weapon" },

        // Category: 'backpack' (Max 1 per loadout)
        { name: "LIFT-850 Jump Pack", name_es: "Mochila de Salto LIFT-850", icon_path: "Jump_Pack_Stratagem_Icon.png", category: "backpack" },
        { name: "B-1 Supply Pack", name_es: "Mochila de Suministros B-1", icon_path: "Supply_Pack_Stratagem_Icon.png", category: "backpack" },
        { name: "AX/LAS-5 'Guard Dog' Rover", name_es: "Rover 'Perro Guardián' AX/LAS-5", icon_path: "Guard_Dog_Rover_Stratagem_Icon.png", category: "backpack" },
        { name: "SH-20 Ballistic Shield Backpack", name_es: "Mochila con Escudo Balístico SH-20", icon_path: "Ballistic_Shield_Backpack_Stratagem_Icon.png", category: "backpack" },
        { name: "SH-32 Shield Generator Pack", name_es: "Mochila Generadora de Escudo SH-32", icon_path: "Shield_Generator_Pack_Stratagem_Icon.png", category: "backpack" },
        { name: "AX/AR-23 'Guard Dog'", name_es: "'Perro Guardián' AX/AR-23", icon_path: "Guard_Dog_Stratagem_Icon.png", category: "backpack" },
        { name: "AX/TX-13 'Guard Dog' Dog Breath", name_es: "'Perro Guardián' Aliento de Perro AX/TX-13", icon_path: "Guard_Dog_Dog_Breath_Stratagem_Icon.png", category: "backpack" },
        { name: "SH-51 Directional Shield", name_es: "Escudo Direccional SH-51", icon_path: "SH-51_Directional_Shield_Stratagem_Icon.png", category: "backpack" },
        { name: "LIFT-860 Hover Pack", name_es: "Mochila Flotadora LIFT-860", icon_path: "Hover_Pack_Stratagem_Icon.png", category: "backpack" },
        { name: "AX/ARC-3 'Guard Dog' K-9", name_es: "'Perro Guardián' K-9 AX/ARC-3", icon_path: "AX_ARC-3_Guard_Dog_K-9_Stratagem_Icon.png", category: "backpack" },
        { name: "LIFT-182 Warp Pack", name_es: "Mochila de Teletransporte LIFT-182", icon_path: "LIFT-182_Warp_Pack_Stratagem_Icon.png", category: "backpack" },
        { name: "B-100 Portable Hellbomb", name_es: "Hellbomb Portátil B-100", icon_path: "Portable_Hellbomb_Stratagem_Icon.png", category: "backpack" },

        // Category: 'vehicle_mech' (Mutually exclusive with other mechs and recon)
        { name: "EXO-45 Patriot Exosuit", name_es: "Exotraje Patriota EXO-45", icon_path: "EXO-45_Patriot_Exosuit_Stratagem_Icon.png", category: "vehicle_mech" },
        { name: "EXO-49 Emancipator Exosuit", name_es: "Exotraje Emancipador EXO-49", icon_path: "EXO-49_Emancipator_Exosuit_Stratagem_Icon.png", category: "vehicle_mech" },
        
        // Category: 'vehicle_recon' (Mutually exclusive with mechs)
        { name: "M-102 Fast Recon Vehicle", name_es: "Vehículo de Reconocimiento Rápido M-102", icon_path: "M-102_Fast_Recon_Vehicle_Stratagem_Icon.png", category: "vehicle_recon" },

        // Category: 'other' (No special rules: Orbitals, Eagles, Sentries, Emplacements, Mines)
        { name: "Orbital Gatling Barrage", name_es: "Andanada Orbital de Gatling", icon_path: "Orbital_Gatling_Barrage_Stratagem_Icon.png", category: "other" },
        { name: "Orbital Airburst Strike", name_es: "Ataque de Explosión Aérea Orbital", icon_path: "Orbital_Airburst_Strike_Stratagem_Icon.png", category: "other" },
        { name: "Orbital 120mm HE Barrage", name_es: "Andanada Orbital HE de 120mm", icon_path: "Orbital_120mm_HE_Barrage_Stratagem_Icon.png", category: "other" },
        { name: "Orbital 380mm HE Barrage", name_es: "Andanada Orbital HE de 380mm", icon_path: "Orbital_380mm_HE_Barrage_Stratagem_Icon.png", category: "other" },
        { name: "Orbital Walking Barrage", name_es: "Andanada Orbital Móvil", icon_path: "Orbital_Walking_Barrage_Stratagem_Icon.png", category: "other" },
        { name: "Orbital Laser", name_es: "Láser Orbital", icon_path: "Orbital_Laser_Stratagem_Icon.png", category: "other" },
        { name: "Orbital Napalm Barrage", name_es: "Andanada de Napalm Orbital", icon_path: "Orbital_Napalm_Barrage_Stratagem_Icon.png", category: "other" },
        { name: "Orbital Railcannon Strike", name_es: "Ataque de Cañón de Riel Orbital", icon_path: "Orbital_Railcannon_Strike_Stratagem_Icon.png", category: "other" },
        { name: "Eagle Strafing Run", name_es: "Pasada de Ametrallamiento de Águila", icon_path: "Eagle_Strafing_Run_Stratagem_Icon.png", category: "other" },
        { name: "Eagle Airstrike", name_es: "Ataque Aéreo de Águila", icon_path: "Eagle_Airstrike_Stratagem_Icon.png", category: "other" },
        { name: "Eagle Cluster Bomb", name_es: "Bomba de Racimo de Águila", icon_path: "Eagle_Cluster_Bomb_Stratagem_Icon.png", category: "other" },
        { name: "Eagle Napalm Airstrike", name_es: "Ataque Aéreo de Napalm del Águila", icon_path: "Eagle_Napalm_Airstrike_Stratagem_Icon.png", category: "other" },
        { name: "Eagle Smoke Strike", name_es: "Ataque de Humo de Águila", icon_path: "Eagle_Smoke_Strike_Stratagem_Icon.png", category: "other" },
        { name: "Eagle 110mm Rocket Pods", name_es: "Vainas de Cohetes de 110mm de Águila", icon_path: "Eagle_110mm_Rocket_Pods_Stratagem_Icon.png", category: "other" },
        { name: "Eagle 500kg Bomb", name_es: "Bomba de 500kg de Águila", icon_path: "Eagle_500kg_Bomb_Stratagem_Icon.png", category: "other" },
        { name: "Orbital Precision Strike", name_es: "Ataque de Precisión Orbital", icon_path: "Orbital_Precision_Strike_Stratagem_Icon.png", category: "other" },
        { name: "Orbital Gas Strike", name_es: "Ataque de Gas Orbital", icon_path: "Orbital_Gas_Strike_Stratagem_Icon.png", category: "other" },
        { name: "Orbital EMS Strike", name_es: "Ataque EMS Orbital", icon_path: "Orbital_EMS_Strike_Stratagem_Icon.png", category: "other" },
        { name: "Orbital Smoke Strike", name_es: "Ataque de Humo Orbital", icon_path: "Orbital_Smoke_Strike_Stratagem_Icon.png", category: "other" },
        { name: "E/MG-101 HMG Emplacement", name_es: "Emplazamiento de Ametralladora Pesada E/MG-101", icon_path: "HMG_Emplacement_Stratagem_Icon.png", category: "other" },
        { name: "FX-12 Shield Generator Relay", name_es: "Relé Generador de Escudo FX-12", icon_path: "Shield_Generator_Relay_Stratagem_Icon.png", category: "other" },
        { name: "A/ARC-3 Tesla Tower", name_es: "Torre Tesla A/ARC-3", icon_path: "Tesla_Tower_Stratagem_Icon.png", category: "other" },
        { name: "E/GL-21 Grenadier Battlement", name_es: "Parapeto de Granadero E/GL-21", icon_path: "GL-21_Grenadier_Battlement_Stratagem_Icon.png", category: "other" },
        { name: "MD-6 Anti-Personnel Minefield", name_es: "Campo de Minas Antipersonal MD-6", icon_path: "Anti-Personnel_Minefield_Stratagem_Icon.png", category: "other" },
        { name: "MD-I4 Incendiary Mines", name_es: "Minas Incendiarias MD-I4", icon_path: "Incendiary_Mines_Stratagem_Icon.png", category: "other" },
        { name: "MD-17 Anti-Tank Mines", name_es: "Minas Antitanque MD-17", icon_path: "MD-17_Anti-Tank_Mines_Stratagem_Icon.png", category: "other" },
        { name: "MD-8 Gas Mines", name_es: "Minas de Gas MD-8", icon_path: "Gas_Minefield_Stratagem_Icon.png", category: "other" },
        { name: "A/MG-43 Machine Gun Sentry", name_es: "Centinela con Ametralladora A/MG-43", icon_path: "Machine_Gun_Sentry_Stratagem_Icon.png", category: "other" },
        { name: "A/G-16 Gatling Sentry", name_es: "Centinela Gatling A/G-16", icon_path: "Gatling_Sentry_Stratagem_Icon.png", category: "other" },
        { name: "A/M-12 Mortar Sentry", name_es: "Centinela con Mortero A/M-12", icon_path: "Mortar_Sentry_Stratagem_Icon.png", category: "other" },
        { name: "A/AC-8 Autocannon Sentry", name_es: "Centinela con Cañón Automático A/AC-8", icon_path: "Autocannon_Sentry_Stratagem_Icon.png", category: "other" },
        { name: "A/MLS-4X Rocket Sentry", name_es: "Centinela de Cohetes A/MLS-4X", icon_path: "Rocket_Sentry_Stratagem_Icon.png", category: "other" },
        { name: "A/M-23 EMS Mortar Sentry", name_es: "Centinela con Mortero EMS A/M-23", icon_path: "AM-23_EMS_Mortar_Sentry_Stratagem_Icon.png", category: "other" },
        { name: "E/AT-12 Anti-Tank Emplacement", name_es: "Emplazamiento Antitanque E/AT-12", icon_path: "E_AT-12_Anti-Tank_Emplacement_Stratagem_Icon.png", category: "other" },
        { name: "A/FLAM-40 Flame Sentry", name_es: "Centinela de Fuego A/FLAM-40", icon_path: "A_FLAM-40_Flame_Sentry_Stratagem_Icon.png", category: "other" },
        { name: "A/LAS-98 Laser Sentry", name_es: "Centinela Láser A/LAS-98", icon_path: "A_LAS-98_Laser_Sentry_Stratagem_Icon.png", category: "other" }
    ];
    const iconBaseUrl = "https://helldivers.wiki.gg/wiki/Stratagems#/media/File:";

    const spinButton = document.getElementById('spin-button');
    const slotImages = document.querySelectorAll('.slot img');
    const resultsDiv = document.getElementById('results');

    spinButton.addEventListener('click', runRandomizerWithRules);

    /**
     * Checks if adding a new stratagem to the current loadout is valid based on game rules.
     * @param {object} newItem - The stratagem object to be added.
     * @param {Array<object>} currentLoadout - The array of stratagems already selected.
     * @returns {boolean} - True if the addition is valid, false otherwise.
     */
    function isValidSelection(newItem, currentLoadout) {
        // Rule: Only one backpack is allowed.
        if (newItem.category === 'backpack' && (currentLoadout.some(item => item.category === 'backpack' ) || currentLoadout.some(item => item.category === 'backpackWeapon'))) {
            return false;
        }

        // Rule: Only one non-expendable support weapon is allowed.
        if (newItem.category === 'weapon' && (currentLoadout.some(item => item.category === 'weapon') || currentLoadout.some(item => item.category === 'backpackWeapon'))) {
            return false;
        }

        // Rule: Weapon with backpack only allowed if there is no backpack already
        if (newItem.category === 'backpackWeapon' && (currentLoadout.some(item => item.category === 'backpack') || currentLoadout.some(item => item.category === 'weapon'))) {
            return false;
        }
            

        const hasMech = currentLoadout.some(item => item.category === 'vehicle_mech');
        const hasRecon = currentLoadout.some(item => item.category === 'vehicle_recon');

        // Rule: Mechs are mutually exclusive with other mechs and the recon vehicle.
        if (newItem.category === 'vehicle_mech' && (hasMech || hasRecon)) {
            return false;
        }

        // Rule: The recon vehicle is mutually exclusive with mechs.
        if (newItem.category === 'vehicle_recon' && hasMech) {
            return false;
        }

        return true; // The selection is valid if no rules were broken.
    }
    
    /**
     * Main function to generate a random, rule-compliant loadout.
     */
    function runRandomizerWithRules() {
        spinButton.disabled = true;
        resultsDiv.innerHTML = '<p>Generating a valid loadout...</p>';
        slotImages.forEach(img => {
            img.parentElement.classList.add('spinning');
            img.src = ''; 
        });

        const selectedLoadout = [];
        const availableStratagems = [...stratagems].sort(() => 0.5 - Math.random());

        // Iterate through the shuffled list and pick the first 4 valid stratagems.
        for (const stratagem of availableStratagems) {
            if (selectedLoadout.length >= 4) {
                break; // Stop once we have a full loadout.
            }

            if (isValidSelection(stratagem, selectedLoadout)) {
                selectedLoadout.push(stratagem);
            }
        }

        setTimeout(() => {
            slotImages.forEach(img => img.parentElement.classList.remove('spinning'));
            displayResults(selectedLoadout);
            spinButton.disabled = false;
        }, 1500); // Animation duration
    }

    /**
     * Displays the final loadout in the UI.
     * @param {Array<object>} loadout - The final array of 4 stratagems.
     */
    function displayResults(loadout) {
        resultsDiv.innerHTML = '';
        // Handle the rare case where a full loadout couldn't be formed.
        if (loadout.length < 4) {
            resultsDiv.innerHTML = '<p>Could not generate a full, valid loadout. This is rare, please try again!</p>';
            return;
        }
        
        loadout.forEach((stratagem, index) => {
            if (slotImages[index]) {
                slotImages[index].src = iconBaseUrl + stratagem.icon_path;
                slotImages[index].alt = stratagem.name;
            }

            const resultEntry = document.createElement('p');
            // Displaying the category can be helpful for debugging or for user information.
            resultEntry.innerHTML = `<strong>${stratagem.name}</strong> <em>(Spanish: ${stratagem.name_es})</em>`;
            resultsDiv.appendChild(resultEntry);
        });
    }
});