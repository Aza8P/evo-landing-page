
import React, { useRef, useEffect, useState } from 'react';

const Features3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const features = [
    {
      id: 1,
      title: "Anti-slip waistband",
      description: "Stays put even during hill climbs",
      position: { x: 0, y: 1.2, z: 0 }
    },
    {
      id: 2,
      title: "Tummy control & all around support",
      description: "360-degree compression for confidence",
      position: { x: 0, y: 0.8, z: 0.3 }
    },
    {
      id: 3,
      title: "Fast-dry & sweat-wicking material",
      description: "Breathes as hard as you do",
      position: { x: 0.4, y: 0.3, z: 0 }
    },
    {
      id: 4,
      title: "Stays in place during saddle changes and HIIT transitions",
      description: "No riding up, no adjusting",
      position: { x: 0, y: 0.5, z: 0.4 }
    },
    {
      id: 5,
      title: "Built for endurance, not just looks",
      description: "Performance-first design",
      position: { x: -0.4, y: 0, z: 0 }
    },
    {
      id: 6,
      title: "Sculpts the butt area",
      description: "Enhances your natural shape",
      position: { x: 0, y: -0.3, z: -0.4 }
    },
    {
      id: 7,
      title: "Compression waistband",
      description: "Support without squeeze",
      position: { x: 0, y: 1.1, z: 0.2 }
    },
    {
      id: 8,
      title: "Smooth bonded waistband",
      description: "Zero irritation technology",
      position: { x: 0, y: 1.0, z: -0.2 }
    }
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new (window as any).THREE.Scene();
    const camera = new (window as any).THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new (window as any).THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = (window as any).THREE.PCFSoftShadowMap;

    // Enhanced lighting setup
    const ambientLight = new (window as any).THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new (window as any).THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const rimLight = new (window as any).THREE.DirectionalLight(0x00ff88, 0.3);
    rimLight.position.set(-5, 2, -5);
    scene.add(rimLight);

    const fillLight = new (window as any).THREE.PointLight(0x0088ff, 0.2);
    fillLight.position.set(0, -2, 3);
    scene.add(fillLight);

    // Create realistic pants geometry
    const pantsGroup = new (window as any).THREE.Group();
    
    // Main torso/hip area with more realistic shape
    const torsoGeometry = new (window as any).THREE.CylinderGeometry(0.7, 0.9, 0.8, 16);
    const torsoMaterial = new (window as any).THREE.MeshPhongMaterial({ 
      color: 0x1a1a1a,
      shininess: 20,
      transparent: true,
      opacity: 0.95
    });
    const torso = new (window as any).THREE.Mesh(torsoGeometry, torsoMaterial);
    torso.position.y = 0.9;
    torso.castShadow = true;
    pantsGroup.add(torso);

    // Waistband with ÉVO branding area
    const waistbandGeometry = new (window as any).THREE.CylinderGeometry(0.72, 0.7, 0.15, 16);
    const waistbandMaterial = new (window as any).THREE.MeshPhongMaterial({ 
      color: 0x2a2a2a,
      shininess: 30
    });
    const waistband = new (window as any).THREE.Mesh(waistbandGeometry, waistbandMaterial);
    waistband.position.y = 1.35;
    waistband.castShadow = true;
    pantsGroup.add(waistband);

    // Left leg with realistic taper
    const leftLegUpper = new (window as any).THREE.CylinderGeometry(0.35, 0.4, 0.8, 12);
    const leftLegLower = new (window as any).THREE.CylinderGeometry(0.25, 0.35, 0.8, 12);
    const legMaterial = new (window as any).THREE.MeshPhongMaterial({ 
      color: 0x1a1a1a,
      shininess: 20,
      transparent: true,
      opacity: 0.95
    });
    
    const leftThigh = new (window as any).THREE.Mesh(leftLegUpper, legMaterial);
    leftThigh.position.set(-0.25, 0.1, 0);
    leftThigh.castShadow = true;
    pantsGroup.add(leftThigh);
    
    const leftCalf = new (window as any).THREE.Mesh(leftLegLower, legMaterial);
    leftCalf.position.set(-0.25, -0.7, 0);
    leftCalf.castShadow = true;
    pantsGroup.add(leftCalf);

    // Right leg
    const rightThigh = new (window as any).THREE.Mesh(leftLegUpper, legMaterial);
    rightThigh.position.set(0.25, 0.1, 0);
    rightThigh.castShadow = true;
    pantsGroup.add(rightThigh);
    
    const rightCalf = new (window as any).THREE.Mesh(leftLegLower, legMaterial);
    rightCalf.position.set(0.25, -0.7, 0);
    rightCalf.castShadow = true;
    pantsGroup.add(rightCalf);

    // Side panels/seams (inspired by the image)
    const sidePanelGeometry = new (window as any).THREE.PlaneGeometry(0.1, 1.8);
    const sidePanelMaterial = new (window as any).THREE.MeshPhongMaterial({ 
      color: 0x333333,
      transparent: true,
      opacity: 0.8
    });
    
    const leftSidePanel = new (window as any).THREE.Mesh(sidePanelGeometry, sidePanelMaterial);
    leftSidePanel.position.set(-0.45, 0.2, 0);
    leftSidePanel.rotation.y = Math.PI / 2;
    pantsGroup.add(leftSidePanel);
    
    const rightSidePanel = new (window as any).THREE.Mesh(sidePanelGeometry, sidePanelMaterial);
    rightSidePanel.position.set(0.45, 0.2, 0);
    rightSidePanel.rotation.y = -Math.PI / 2;
    pantsGroup.add(rightSidePanel);

    // ÉVO logo area on waistband
    const logoGeometry = new (window as any).THREE.PlaneGeometry(0.2, 0.08);
    const logoMaterial = new (window as any).THREE.MeshPhongMaterial({ 
      color: 0x00ff88,
      emissive: 0x004422
    });
    const logo = new (window as any).THREE.Mesh(logoGeometry, logoMaterial);
    logo.position.set(0, 1.35, 0.36);
    pantsGroup.add(logo);

    scene.add(pantsGroup);

    // Feature highlight spheres with better positioning
    const highlightSpheres = features.map((feature) => {
      const sphereGeometry = new (window as any).THREE.SphereGeometry(0.04, 8, 8);
      const sphereMaterial = new (window as any).THREE.MeshBasicMaterial({ 
        color: 0x00ff88,
        transparent: true,
        opacity: 0.9
      });
      const sphere = new (window as any).THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(feature.position.x, feature.position.y, feature.position.z);
      sphere.userData = { featureId: feature.id };
      
      // Add a subtle glow effect
      const glowGeometry = new (window as any).THREE.SphereGeometry(0.06, 8, 8);
      const glowMaterial = new (window as any).THREE.MeshBasicMaterial({ 
        color: 0x00ff88,
        transparent: true,
        opacity: 0.2
      });
      const glow = new (window as any).THREE.Mesh(glowGeometry, glowMaterial);
      sphere.add(glow);
      
      pantsGroup.add(sphere);
      return sphere;
    });

    camera.position.set(0, 0.5, 3);
    camera.lookAt(0, 0.2, 0);

    // Enhanced mouse controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      canvas.style.cursor = 'grabbing';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaMove = {
          x: e.clientX - previousMousePosition.x,
          y: e.clientY - previousMousePosition.y
        };

        pantsGroup.rotation.y += deltaMove.x * 0.008;
        pantsGroup.rotation.x += deltaMove.y * 0.008;
        
        // Limit vertical rotation
        pantsGroup.rotation.x = Math.max(-Math.PI/3, Math.min(Math.PI/3, pantsGroup.rotation.x));
      }

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
      canvas.style.cursor = 'grab';
    };

    const onMouseClick = (e: MouseEvent) => {
      if (isDragging) return;
      
      const rect = canvas.getBoundingClientRect();
      const mouse = new (window as any).THREE.Vector2();
      mouse.x = ((e.clientX - rect.left) / canvas.clientWidth) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / canvas.clientHeight) * 2 + 1;

      const raycaster = new (window as any).THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(highlightSpheres);
      if (intersects.length > 0) {
        const featureId = intersects[0].object.userData.featureId;
        setSelectedFeature(featureId === selectedFeature ? null : featureId);
      }
    };

    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('click', onMouseClick);
    canvas.style.cursor = 'grab';

    // Enhanced animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Gentle auto-rotation when not being dragged
      if (!isDragging) {
        pantsGroup.rotation.y += 0.003;
      }

      // Enhanced highlight sphere animations
      highlightSpheres.forEach((sphere, index) => {
        const baseOpacity = 0.7;
        const pulse = Math.sin(time * 2 + index * 0.5) * 0.3;
        sphere.material.opacity = baseOpacity + pulse;
        
        if (selectedFeature === sphere.userData.featureId) {
          const scale = 1.3 + Math.sin(time * 6) * 0.2;
          sphere.scale.setScalar(scale);
          sphere.material.color.setHex(0xffffff);
          sphere.material.opacity = 1;
        } else {
          sphere.scale.setScalar(1);
          sphere.material.color.setHex(0x00ff88);
        }
        
        // Subtle floating animation
        const originalY = features[index].position.y;
        sphere.position.y = originalY + Math.sin(time * 1.5 + index) * 0.02;
      });

      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    setIsLoaded(true);
    animate();

    return () => {
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('click', onMouseClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedFeature]);

  const selectedFeatureData = selectedFeature ? features.find(f => f.id === selectedFeature) : null;

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Holographic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent,rgba(255,255,255,0.03),transparent,rgba(156,163,175,0.05),transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Click the highlights to explore each feature. Drag to rotate the model.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Model */}
          <div className="relative">
            <canvas 
              ref={canvasRef}
              className="w-full h-[600px] cursor-grab active:cursor-grabbing border border-white/20 rounded-lg"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)' }}
            />
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-lg">
                <div className="text-white flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-400"></div>
                  <span>Loading 3D model...</span>
                </div>
              </div>
            )}
          </div>

          {/* Feature Details */}
          <div className="space-y-6">
            {selectedFeatureData ? (
              <div className="bg-gray-900/50 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {selectedFeatureData.title}
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  {selectedFeatureData.description}
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-2 animate-pulse"></div>
                  Click another highlight to explore more features
                </div>
              </div>
            ) : (
              <div className="bg-gray-900/50 p-8 rounded-xl border border-white/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Explore Our Features
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Click on the green highlights on the 3D model to discover each performance feature of the ÉVO HIIT+ Tights.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {features.slice(0, 4).map((feature) => (
                    <div 
                      key={feature.id}
                      className="text-sm text-gray-400 cursor-pointer hover:text-white transition-colors p-2 rounded hover:bg-white/5"
                      onClick={() => setSelectedFeature(feature.id)}
                    >
                      • {feature.title}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features3D;
