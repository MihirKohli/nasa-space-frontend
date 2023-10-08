import { Environment, OrbitControls, PerspectiveCamera, Html } from "@react-three/drei";
import { useEffect, useRef, useState, useMemo } from "react";
import { angleToRadians } from "./utils/angle";
import * as THREE from "three";
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Line, Sphere, Stars } from '@react-three/drei'
import Sun from "./Sun";
import Moon from "./Moon";
import Earth from "./Earth";
import { Ecliptic } from "./Ecliptic";

export default function Play({ initPos, isWinning }) {

    let [sun, setSun] = useState({ x: 0, y: 0, z: 0 });
    let [earth, setEarth] = useState({ x: 0, y: 0, z: 0 });
    let [moon, setMoon] = useState({ x: 0, y: 0, z: 0 });
    let [moonCor, setMoonCor] = useState([{ x: initPos.moon.x, y: initPos.moon.y }]);
    let [curIdx, setCurIdx] = useState(0);
    let [earthMoonDist, setEarthMoonDist] = useState(0);

    useEffect(() => {
        setSun(initPos.sun);
        setMoon(initPos.moon);
        setEarth(initPos.earth);
        const obj = calculateCirclePoints(initPos.earth.x, initPos.earth.y, initPos.moon.x, initPos.moon.y);
        const dist = calculateDistance(initPos.earth.x, initPos.earth.y, initPos.moon.x, initPos.moon.y);
        console.log(obj);
        console.log(dist);
        setMoonCor(obj);
        setEarthMoonDist(dist);
    }, [])

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "ArrowLeft") {
                console.log("left");
                moveMoonLeft();
            } else if (event.key === "ArrowRight") {
                console.log("right");
                moveMoonRight();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [curIdx]); 


    function calculateCirclePoints(mainX, mainY, otherX, otherY) {
        let radius = Math.sqrt(Math.pow(otherY - mainY, 2) + Math.pow(otherX - mainX, 2));
        let numPoints = 30;
        let circlePoints = [];

        for (let i = 0; i < numPoints; i++) {
            let angle = (i / numPoints) * 2 * Math.PI;
            let x = mainX + radius * Math.cos(angle);
            let y = mainY + radius * Math.sin(angle);
            circlePoints.push({ x, y });
        }
        return circlePoints;
    }

    function calculateDistance(mainX, mainY, otherX, otherY) {
        let radius = Math.sqrt(Math.pow(otherY - mainY, 2) + Math.pow(otherX - mainX, 2));
        return radius;
    }

    const moveMoonRight = () => {
        setCurIdx(curIdx == 0 ? 29 : (curIdx - 1) % 30);
        setMoon({ ...moon, x: moonCor[curIdx].x, z: moonCor[curIdx].y });
        console.log(moon.x, " ", moon.y, " ", moon.z);
        if (isWinning({ sun: sun, moon: moon, earth: earth })) {
            console.log("WINNNER");
        }
        else
            console.log("LOOSSSSSSe");
    }
    const moveMoonLeft = () => {
        setCurIdx((curIdx + 1) % 30);
        setMoon({ ...moon, x: moonCor[curIdx].x, z: moonCor[curIdx].y });
        console.log(moon.x, " ", moon.y, " ", moon.z);
        if (isWinning({ sun: sun, moon: moon, earth: earth })) {
            console.log("WINNNER");
        }
        else
            console.log("LOOSSSSSSe");

    }
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 1, 6]} />
            <OrbitControls />

            <Sun pos={sun} />

            <Moon pos={moon} />

            <Ecliptic xRadius={earthMoonDist} zRadius={earthMoonDist} center={{ x: earth.x, y: earth.y, z: earth.z }} />


            <Earth pos={earth} />

            <Ecliptic xRadius={4} zRadius={4} center={{ x: sun.x, y: sun.y, z: sun.z }} />




            <ambientLight args={["#ffffff", 0.10]} />


            <pointLight args={["ffffff", 1, 0, 2]} position={[0.5, 0, 0]} castShadow />
            <pointLight args={["ffffff", 1, 0, 2]} position={[-0.5, 0, 0]} castShadow />
            <pointLight args={["ffffff", 1, 0, 2]} position={[0, 0, 0.5]} castShadow />
            <pointLight args={["ffffff", 1, 0, 2]} position={[0, 0, -0.5]} castShadow />
            <pointLight args={["ffffff", 1, 0, 2]} position={[0, 0.5, 0]} castShadow />
            <pointLight args={["ffffff", 1, 0, 2]} position={[0, -0.5, 0]} castShadow />


            <pointLight args={["ffffff", 2, 2.5, 2]} position={[1, 0, 0]} castShadow />
            <pointLight args={["ffffff", 2, 2.5, 2]} position={[-1, 0, 0]} castShadow />
            <pointLight args={["ffffff", 2, 2.5, 2]} position={[0, 1, 0]} castShadow />
            <pointLight args={["ffffff", 2, 2.5, 2]} position={[0, -1, 0]} castShadow />
            <pointLight args={["ffffff", 2, 2.5, 2]} position={[0, 0, 1]} castShadow />
            <pointLight args={["ffffff", 2, 2.5, 2]} position={[0, 0, -1]} castShadow />


        </>
    )
}