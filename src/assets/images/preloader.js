import React from "react";

const Preloader = () => {
  return (
    <div style={{ display: "none" }}>

				{/* < Main Page. Instantly loaded with page >
					<img alt="AKM" src={require("./main/weapons/ARs/AKM.png")} />
					<img alt="AUG_A3" src={require("./main/weapons/ARs/AUG_A3.png")} />
					<img alt="G36C" src={require("./main/weapons/ARs/G36C.png")} />
					<img alt="Groza" src={require("./main/weapons/ARs/Groza.png")} />
					<img alt="HK416" src={require("./main/weapons/ARs/HK416.png")} />
					<img alt="M16A4" src={require("./main/weapons/ARs/M16A4.png")} />
					<img alt="M762_Beryl" src={require("./main/weapons/ARs/M762_Beryl.png")} />
					<img alt="Mk47_Mutant" src={require("./main/weapons/ARs/Mk47_Mutant.png")} />
					<img alt="QBZ95" src={require("./main/weapons/ARs/QBZ95.png")} />
					<img alt="SCAR_L" src={require("./main/weapons/ARs/SCAR-L.png")} />
					<img alt="lvl0h" src={require("./main/gear/helmets/lvl0h.png")} />
					<img alt="lvl0h" src={require("./main/gear/selected/helmets/lvl0h.png")} />
					<img alt="lvl1h" src={require("./main/gear/helmets/lvl1h.png")} />
					<img alt="lvl2h" src={require("./main/gear/helmets/lvl2h.png")} />
					<img alt="lvl3h" src={require("./main/gear/helmets/lvl3h.png")} />
					<img alt="lvl0v" src={require("./main/gear/vests/lvl0v.png")} />
					<img alt="lvl0v" src={require("./main/gear/selected/vests/lvl0v.png")} />
					<img alt="lvl1v" src={require("./main/gear/vests/lvl1v.png")} />
					<img alt="lvl2v" src={require("./main/gear/vests/lvl2v.png")} />
					<img alt="lvl3v" src={require("./main/gear/vests/lvl3v.png")} />
				</ Main Page > */}

				{/* Requier preloading */}
				
				<img alt="lvl1h" src={require("./main/gear/selected/helmets/lvl1h.png")} />
				<img alt="lvl2h" src={require("./main/gear/selected/helmets/lvl2h.png")} />
				<img alt="lvl3h" src={require("./main/gear/selected/helmets/lvl3h.png")} />
				<img alt="lvl1v" src={require("./main/gear/selected/vests/lvl1v.png")} />
				<img alt="lvl2v" src={require("./main/gear/selected/vests/lvl2v.png")} />
				<img alt="lvl3v" src={require("./main/gear/selected/vests/lvl3v.png")} />
        <img alt="AKM_s" src={require("./main/weapons/selected/ARs/AKM.png")} />
        <img alt="AUG_A3_s" src={require("./main/weapons/selected/ARs/AUG_A3.png")} />
        <img alt="G36C_s" src={require("./main/weapons/selected/ARs/G36C.png")} />
        <img alt="Groza_s" src={require("./main/weapons/selected/ARs/Groza.png")} />
        <img alt="HK416_s" src={require("./main/weapons/selected/ARs/HK416.png")} />
        <img alt="M16A4" src={require("./main/weapons/selected/ARs/M16A4.png")} />
				<img alt="M762_Beryl" src={require("./main/weapons/selected/ARs/M762_Beryl.png")} />
				<img alt="Mk47_Mutant" src={require("./main/weapons/selected/ARs/Mk47_Mutant.png")} />
				<img alt="QBZ95" src={require("./main/weapons/selected/ARs/QBZ95.png")} />
				<img alt="SCAR_L" src={require("./main/weapons/selected/ARs/SCAR-L.png")} />
        <img alt="Mini14" src={require("./main/weapons/DMRs/Mini14.png")} />
        <img alt="Mini14" src={require("./main/weapons/selected/DMRs/Mini14.png")} />
        <img alt="Mk14" src={require("./main/weapons/DMRs/Mk14.png")} />
        <img alt="Mk14" src={require("./main/weapons/selected/DMRs/Mk14.png")} />
        <img alt="QBU" src={require("./main/weapons/DMRs/QBU.png")} />
        <img alt="QBU" src={require("./main/weapons/selected/DMRs/QBU.png")} />
        <img alt="SKS" src={require("./main/weapons/DMRs/SKS.png")} />
        <img alt="SKS" src={require("./main/weapons/selected/DMRs/SKS.png")} />
        <img alt="SLR" src={require("./main/weapons/DMRs/SLR.png")} />
        <img alt="SLR" src={require("./main/weapons/selected/DMRs/SLR.png")} />
        <img alt="VSS" src={require("./main/weapons/DMRs/VSS.png")} />
        <img alt="VSS" src={require("./main/weapons/selected/DMRs/VSS.png")} />
        <img alt="DP_28" src={require("./main/weapons/LMGs/DP_28.png")} />
        <img alt="DP_28" src={require("./main/weapons/selected/LMGs/DP_28.png")} />
        <img alt="M249" src={require("./main/weapons/LMGs/M249.png")} />
        <img alt="M249" src={require("./main/weapons/selected/LMGs/M249.png")} />
        <img alt="Crowbar" src={require("./main/weapons/Melee/Crowbar.png")} />
        <img alt="Crowbar" src={require("./main/weapons/selected/Melee/Crowbar.png")} />
        <img alt="Machete" src={require("./main/weapons/Melee/Machete.png")} />
        <img alt="Machete" src={require("./main/weapons/selected/Melee/Machete.png")} />
        <img alt="Pan" src={require("./main/weapons/Melee/Pan.png")} />
        <img alt="Pan" src={require("./main/weapons/selected/Melee/Pan.png")} />
        <img alt="Sickle" src={require("./main/weapons/Melee/Sickle.png")} />
        <img alt="Sickle" src={require("./main/weapons/selected/Melee/Sickle.png")} />
        <img alt="Deagle" src={require("./main/weapons/Pistols/Deagle.png")} />
        <img alt="Deagle" src={require("./main/weapons/selected/Pistols/Deagle.png")} />
        <img alt="P1911" src={require("./main/weapons/Pistols/P1911.png")} />
        <img alt="P1911" src={require("./main/weapons/selected/Pistols/P1911.png")} />
        <img alt="P18C" src={require("./main/weapons/Pistols/P18C.png")} />
        <img alt="P18C" src={require("./main/weapons/selected/Pistols/P18C.png")} />
        <img alt="P92" src={require("./main/weapons/Pistols/P92.png")} />
        <img alt="P92" src={require("./main/weapons/selected/Pistols/P92.png")} />
        <img alt="R45" src={require("./main/weapons/Pistols/R45.png")} />
        <img alt="R45" src={require("./main/weapons/selected/Pistols/R45.png")} />
        <img alt="R1895" src={require("./main/weapons/Pistols/R1895.png")} />
        <img alt="R1895" src={require("./main/weapons/selected/Pistols/R1895.png")} />
        <img alt="Skorpion" src={require("./main/weapons/Pistols/Skorpion.png")} />
        <img alt="Skorpion" src={require("./main/weapons/selected/Pistols/Skorpion.png")} />
        <img alt="S12K" src={require("./main/weapons/SGs/S12K.png")} />
        <img alt="S12K" src={require("./main/weapons/selected/SGs/S12K.png")} />
        <img alt="S686" src={require("./main/weapons/SGs/S686.png")} />
        <img alt="S686" src={require("./main/weapons/selected/SGs/S686.png")} />
        <img alt="S1897" src={require("./main/weapons/SGs/S1897.png")} />
        <img alt="S1897" src={require("./main/weapons/selected/SGs/S1897.png")} />
        <img alt="Sawed_off" src={require("./main/weapons/SGs/Sawed_off.png")} />
        <img alt="Sawed_off" src={require("./main/weapons/selected/SGs/Sawed_off.png")} />
        <img alt="MP5K" src={require("./main/weapons/SMGs/MP5K.png")} />
        <img alt="MP5K" src={require("./main/weapons/selected/SMGs/MP5K.png")} />
        <img alt="PP_19_Bizon" src={require("./main/weapons/SMGs/PP-19_Bizon.png")} />
        <img alt="PP_19_Bizon" src={require("./main/weapons/selected/SMGs/PP-19_Bizon.png")} />
        <img alt="Thompson" src={require("./main/weapons/SMGs/Thompson.png")} />
        <img alt="Thompson" src={require("./main/weapons/selected/SMGs/Thompson.png")} />
        <img alt="UMP" src={require("./main/weapons/SMGs/UMP.png")} />
        <img alt="UMP" src={require("./main/weapons/selected/SMGs/UMP.png")} />
        <img alt="UZI" src={require("./main/weapons/SMGs/UZI.png")} />
        <img alt="UZI" src={require("./main/weapons/selected/SMGs/UZI.png")} />
        <img alt="Vector" src={require("./main/weapons/SMGs/Vector.png")} />
        <img alt="Vector" src={require("./main/weapons/selected/SMGs/Vector.png")} />
        <img alt="AWM" src={require("./main/weapons/SRs/AWM.png")} />
        <img alt="AWM" src={require("./main/weapons/selected/SRs/AWM.png")} />
        <img alt="Kar98k" src={require("./main/weapons/SRs/Kar98k.png")} />
        <img alt="Kar98k" src={require("./main/weapons/selected/SRs/Kar98k.png")} />
        <img alt="M24" src={require("./main/weapons/SRs/M24.png")} />
        <img alt="M24" src={require("./main/weapons/selected/SRs/M24.png")} />
        <img alt="Win94" src={require("./main/weapons/SRs/Win94.png")} />
        <img alt="Win94" src={require("./main/weapons/selected/SRs/Win94.png")} />
        <img alt="Crossbow" src={require("./main/weapons/SRs/Crossbow.png")} />
        <img alt="Crossbow" src={require("./main/weapons/selected/SRs/Crossbow.png")} />
      </div>
  );
};

export default Preloader;
