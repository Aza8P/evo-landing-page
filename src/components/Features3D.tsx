import React, { useRef, useEffect, useState } from 'react';

const Features3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [featureLabels, setFeatureLabels] = useState<Array<{id: number, x: number, y: number, visible: boolean}>>([]);

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
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
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

    // Function to update 2D label positions
    const updateLabelPositions = () => {
      const tempVector = new (window as any).THREE.Vector3();
      const newLabels = features.map((feature) => {
        // Convert 3D position to screen coordinates
        tempVector.set(feature.position.x, feature.position.y, feature.position.z);
        tempVector.applyMatrix4(pantsGroup.matrixWorld);
        tempVector.project(camera);
        
        // Convert to pixel coordinates
        const x = (tempVector.x * 0.5 + 0.5) * canvas.clientWidth;
        const y = (tempVector.y * -0.5 + 0.5) * canvas.clientHeight;
        
        // Check if the point is in front of the camera
        const visible = tempVector.z < 1;
        
        return {
          id: feature.id,
          x,
          y,
          visible
        };
      });
      setFeatureLabels(newLabels);
    };

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
        
        updateLabelPositions();
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
        updateLabelPositions();
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
      updateLabelPositions();
    };

    window.addEventListener('resize', handleResize);

    setIsLoaded(true);
    animate();
    updateLabelPositions();

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
      {/* Spinning Studio Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='spinning-bikes' x='0' y='0' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3ccircle cx='20' cy='20' r='2' fill='%23ffffff' opacity='0.1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23spinning-bikes)'/%3e%3c/svg%3e")`,
        }}
      ></div>
      
      {/* Gradient overlays for studio ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-green-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/20 to-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Click the highlights to explore each feature. Drag to rotate the model.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* 3D Model Container */}
          <div ref={containerRef} className="relative">
            <canvas 
              ref={canvasRef}
              className="w-full h-[600px] cursor-grab active:cursor-grabbing border border-white/20 rounded-lg"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)' }}
            />
            
            {/* Feature Labels positioned at 3D coordinates */}
            {featureLabels.map((label) => {
              const feature = features.find(f => f.id === label.id);
              if (!feature || !label.visible) return null;
              
              const isSelected = selectedFeature === label.id;
              
              return (
                <div
                  key={label.id}
                  className={`absolute pointer-events-none transition-all duration-300 ${
                    isSelected ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    left: `${label.x}px`,
                    top: `${label.y}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div 
                    className={`bg-black/80 backdrop-blur-sm border border-green-400/50 rounded-lg p-3 min-w-[200px] transition-all duration-300 ${
                      isSelected 
                        ? 'bg-green-900/90 border-green-400 shadow-lg shadow-green-400/20 scale-110' 
                        : 'hover:bg-gray-900/90'
                    }`}
                  >
                    <h4 className={`font-semibold text-sm mb-1 ${
                      isSelected ? 'text-green-300' : 'text-white'
                    }`}>
                      {feature.title}
                    </h4>
                    <p className={`text-xs ${
                      isSelected ? 'text-green-200' : 'text-gray-300'
                    }`}>
                      {feature.description}
                    </p>
                    
                    {/* Connection line to feature point */}
                    <div 
                      className={`absolute w-0.5 h-6 ${
                        isSelected ? 'bg-green-400' : 'bg-white/30'
                      }`}
                      style={{
                        bottom: '-24px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                    ></div>
                    <div 
                      className={`absolute w-2 h-2 rounded-full ${
                        isSelected ? 'bg-green-400' : 'bg-white/50'
                      }`}
                      style={{
                        bottom: '-26px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
            
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-lg">
                <div className="text-white flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-400"></div>
                  <span>Loading 3D model...</span>
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Drag to rotate • Click green points to highlight features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features3D;
