
import React, { useRef, useEffect, useState } from 'react';
import { Play } from 'lucide-react';

const Features3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [featureLabels, setFeatureLabels] = useState<Array<{id: number, x: number, y: number, visible: boolean}>>([]);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const features = [
    {
      id: 1,
      title: "Performance Waistband",
      description: "No shifting, no digging – just secure support from warm-up to cooldown.",
      position: { x: 0, y: 1.1, z: 0.35 }
    },
    {
      id: 2,
      title: "Flatlocked Side Seams",
      description: "Move freely, zero irritation – even on double rides.",
      position: { x: 0.4, y: 0.2, z: 0.1 }
    },
    {
      id: 3,
      title: "Sculpted Rear Seam",
      description: "Contours the butt naturally without overcompression.",
      position: { x: 0, y: -0.1, z: -0.45 }
    },
    {
      id: 4,
      title: "Breathable Stretch Fabric",
      description: "Engineered for spin, sweat, and all-out effort.",
      position: { x: -0.3, y: 0.5, z: 0.2 }
    },
    {
      id: 5,
      title: "Built for Saddle Shifts",
      description: "Holds form during sprints, climbs, and standing intervals.",
      position: { x: 0.2, y: -0.4, z: 0.3 }
    }
  ];

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const scene = new (window as any).THREE.Scene();
    const camera = new (window as any).THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new (window as any).THREE.WebGLRenderer({ 
      canvas, 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = (window as any).THREE.PCFSoftShadowMap;
    renderer.outputEncoding = (window as any).THREE.sRGBEncoding;
    renderer.toneMapping = (window as any).THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Cinematic lighting setup
    const ambientLight = new (window as any).THREE.AmbientLight(0x2c2c54, 0.3);
    scene.add(ambientLight);
    
    // Key light (main)
    const keyLight = new (window as any).THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(3, 4, 2);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    scene.add(keyLight);

    // Fill light (softer)
    const fillLight = new (window as any).THREE.DirectionalLight(0x4a90e2, 0.4);
    fillLight.position.set(-2, 1, 3);
    scene.add(fillLight);

    // Rim light (dramatic edge lighting)
    const rimLight = new (window as any).THREE.DirectionalLight(0x00ff88, 0.6);
    rimLight.position.set(-3, 2, -2);
    scene.add(rimLight);

    // Accent light from below
    const accentLight = new (window as any).THREE.PointLight(0x6a4aed, 0.3);
    accentLight.position.set(0, -2, 1);
    scene.add(accentLight);

    // Create floating pants group
    const pantsGroup = new (window as any).THREE.Group();
    
    // Enhanced pants geometry with more realistic proportions
    const waistbandGeometry = new (window as any).THREE.CylinderGeometry(0.65, 0.68, 0.12, 24);
    const waistbandMaterial = new (window as any).THREE.MeshPhysicalMaterial({ 
      color: 0x1a1a1a,
      roughness: 0.3,
      metalness: 0.1,
      clearcoat: 0.2,
      clearcoatRoughness: 0.1
    });
    const waistband = new (window as any).THREE.Mesh(waistbandGeometry, waistbandMaterial);
    waistband.position.y = 1.25;
    waistband.castShadow = true;
    pantsGroup.add(waistband);

    // Hip/torso area with realistic curve
    const hipGeometry = new (window as any).THREE.CylinderGeometry(0.58, 0.75, 0.7, 20);
    const hipMaterial = new (window as any).THREE.MeshPhysicalMaterial({ 
      color: 0x0f0f0f,
      roughness: 0.4,
      metalness: 0.05,
      clearcoat: 0.3,
      transmission: 0.02,
      thickness: 0.1
    });
    const hip = new (window as any).THREE.Mesh(hipGeometry, hipMaterial);
    hip.position.y = 0.8;
    hip.castShadow = true;
    pantsGroup.add(hip);

    // Left thigh with realistic taper
    const thighGeometry = new (window as any).THREE.CylinderGeometry(0.28, 0.38, 0.9, 16);
    const legMaterial = new (window as any).THREE.MeshPhysicalMaterial({ 
      color: 0x0a0a0a,
      roughness: 0.35,
      metalness: 0.08,
      clearcoat: 0.25
    });
    
    const leftThigh = new (window as any).THREE.Mesh(thighGeometry, legMaterial);
    leftThigh.position.set(-0.22, 0.05, 0);
    leftThigh.castShadow = true;
    pantsGroup.add(leftThigh);
    
    // Left calf
    const calfGeometry = new (window as any).THREE.CylinderGeometry(0.18, 0.28, 0.85, 16);
    const leftCalf = new (window as any).THREE.Mesh(calfGeometry, legMaterial);
    leftCalf.position.set(-0.22, -0.82, 0);
    leftCalf.castShadow = true;
    pantsGroup.add(leftCalf);

    // Right leg (mirrored)
    const rightThigh = new (window as any).THREE.Mesh(thighGeometry, legMaterial);
    rightThigh.position.set(0.22, 0.05, 0);
    rightThigh.castShadow = true;
    pantsGroup.add(rightThigh);
    
    const rightCalf = new (window as any).THREE.Mesh(calfGeometry, legMaterial);
    rightCalf.position.set(0.22, -0.82, 0);
    rightCalf.castShadow = true;
    pantsGroup.add(rightCalf);

    // Side seam details
    const seamGeometry = new (window as any).THREE.CylinderGeometry(0.008, 0.008, 1.6, 8);
    const seamMaterial = new (window as any).THREE.MeshPhysicalMaterial({ 
      color: 0x333333,
      roughness: 0.2,
      metalness: 0.3,
      emissive: 0x001111
    });
    
    const leftSeam = new (window as any).THREE.Mesh(seamGeometry, seamMaterial);
    leftSeam.position.set(-0.38, 0.1, 0);
    pantsGroup.add(leftSeam);
    
    const rightSeam = new (window as any).THREE.Mesh(seamGeometry, seamMaterial);
    rightSeam.position.set(0.38, 0.1, 0);
    pantsGroup.add(rightSeam);

    // ÉVO logo on waistband
    const logoGeometry = new (window as any).THREE.PlaneGeometry(0.15, 0.06);
    const logoMaterial = new (window as any).THREE.MeshPhysicalMaterial({ 
      color: 0x00ff88,
      emissive: 0x003322,
      roughness: 0.1,
      metalness: 0.8
    });
    const logo = new (window as any).THREE.Mesh(logoGeometry, logoMaterial);
    logo.position.set(0, 1.25, 0.34);
    pantsGroup.add(logo);

    scene.add(pantsGroup);

    // Feature highlight spheres with enhanced design
    const highlightSpheres = features.map((feature, index) => {
      const sphereGroup = new (window as any).THREE.Group();
      
      // Main sphere
      const sphereGeometry = new (window as any).THREE.SphereGeometry(0.025, 16, 16);
      const sphereMaterial = new (window as any).THREE.MeshPhysicalMaterial({ 
        color: 0x00ff88,
        emissive: 0x004422,
        roughness: 0.1,
        metalness: 0.8,
        transmission: 0.1,
        thickness: 0.5
      });
      const sphere = new (window as any).THREE.Mesh(sphereGeometry, sphereMaterial);
      
      // Outer glow ring
      const ringGeometry = new (window as any).THREE.RingGeometry(0.035, 0.045, 16);
      const ringMaterial = new (window as any).THREE.MeshBasicMaterial({ 
        color: 0x00ff88,
        transparent: true,
        opacity: 0.3,
        side: (window as any).THREE.DoubleSide
      });
      const ring = new (window as any).THREE.Mesh(ringGeometry, ringMaterial);
      ring.lookAt(camera.position);
      
      sphereGroup.add(sphere);
      sphereGroup.add(ring);
      sphereGroup.position.set(feature.position.x, feature.position.y, feature.position.z);
      sphereGroup.userData = { featureId: feature.id, index };
      
      pantsGroup.add(sphereGroup);
      return sphereGroup;
    });

    // Floating platform/base
    const platformGeometry = new (window as any).THREE.CylinderGeometry(1.2, 1.2, 0.02, 32);
    const platformMaterial = new (window as any).THREE.MeshPhysicalMaterial({ 
      color: 0x111111,
      transparent: true,
      opacity: 0.1,
      roughness: 0.1,
      metalness: 0.9,
      transmission: 0.8,
      thickness: 0.1
    });
    const platform = new (window as any).THREE.Mesh(platformGeometry, platformMaterial);
    platform.position.y = -1.5;
    platform.receiveShadow = true;
    scene.add(platform);

    // Particle system for ambient effect
    const particleCount = 50;
    const particleGeometry = new (window as any).THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }
    
    particleGeometry.setAttribute('position', new (window as any).THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new (window as any).THREE.PointsMaterial({
      color: 0x00ff88,
      size: 0.02,
      transparent: true,
      opacity: 0.6,
      blending: (window as any).THREE.AdditiveBlending
    });
    const particles = new (window as any).THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.set(0, 0.5, 4);
    camera.lookAt(0, 0.2, 0);

    // Update label positions function
    const updateLabelPositions = () => {
      const tempVector = new (window as any).THREE.Vector3();
      const newLabels = features.map((feature) => {
        tempVector.set(feature.position.x, feature.position.y, feature.position.z);
        tempVector.applyMatrix4(pantsGroup.matrixWorld);
        tempVector.project(camera);
        
        const x = (tempVector.x * 0.5 + 0.5) * canvas.clientWidth;
        const y = (tempVector.y * -0.5 + 0.5) * canvas.clientHeight;
        const visible = tempVector.z < 1;
        
        return { id: feature.id, x, y, visible };
      });
      setFeatureLabels(newLabels);
    };

    // Enhanced mouse/touch controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let autoRotateSpeed = 0.002;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      const clientX = e.clientX || (e as any).touches?.[0]?.clientX || 0;
      const clientY = e.clientY || (e as any).touches?.[0]?.clientY || 0;
      previousMousePosition = { x: clientX, y: clientY };
      canvas.style.cursor = 'grabbing';
      autoRotateSpeed = 0; // Stop auto-rotation when user interacts
    };

    const onPointerMove = (e: PointerEvent) => {
      const clientX = e.clientX || (e as any).touches?.[0]?.clientX || 0;
      const clientY = e.clientY || (e as any).touches?.[0]?.clientY || 0;
      
      if (isDragging) {
        const deltaMove = {
          x: clientX - previousMousePosition.x,
          y: clientY - previousMousePosition.y
        };

        pantsGroup.rotation.y += deltaMove.x * 0.008;
        pantsGroup.rotation.x += deltaMove.y * 0.005;
        
        // Limit vertical rotation
        pantsGroup.rotation.x = Math.max(-Math.PI/6, Math.min(Math.PI/6, pantsGroup.rotation.x));
        
        updateLabelPositions();
      }

      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
      canvas.style.cursor = 'grab';
      // Resume gentle auto-rotation after a delay
      setTimeout(() => {
        if (!isDragging) autoRotateSpeed = 0.001;
      }, 2000);
    };

    const onPointerClick = (e: PointerEvent) => {
      if (isDragging) return;
      
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX || (e as any).touches?.[0]?.clientX || 0;
      const clientY = e.clientY || (e as any).touches?.[0]?.clientY || 0;
      const mouse = new (window as any).THREE.Vector2();
      mouse.x = ((clientX - rect.left) / canvas.clientWidth) * 2 - 1;
      mouse.y = -((clientY - rect.top) / canvas.clientHeight) * 2 + 1;

      const raycaster = new (window as any).THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(highlightSpheres.map(g => g.children[0]));
      if (intersects.length > 0) {
        const featureId = intersects[0].object.parent.userData.featureId;
        setSelectedFeature(featureId === selectedFeature ? null : featureId);
      } else {
        setSelectedFeature(null);
      }
    };

    // Event listeners with pointer events for better mobile support
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('click', onPointerClick);
    canvas.style.cursor = 'grab';
    canvas.style.touchAction = 'none';

    // Animation loop with enhanced effects
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Gentle auto-rotation
      if (!isDragging && autoRotateSpeed > 0) {
        pantsGroup.rotation.y += autoRotateSpeed;
        updateLabelPositions();
      }

      // Subtle breathing animation
      const breathe = Math.sin(time * 1.2) * 0.008;
      pantsGroup.scale.setScalar(1 + breathe);

      // Animate highlight spheres
      highlightSpheres.forEach((sphereGroup, index) => {
        const sphere = sphereGroup.children[0];
        const ring = sphereGroup.children[1];
        
        // Pulse animation
        const pulse = Math.sin(time * 3 + index * 0.8) * 0.15;
        const baseScale = selectedFeature === sphereGroup.userData.featureId ? 1.4 : 1;
        sphere.scale.setScalar(baseScale + pulse);
        
        // Ring rotation
        ring.rotation.z += 0.02;
        ring.lookAt(camera.position);
        
        // Color change when selected
        if (selectedFeature === sphereGroup.userData.featureId) {
          sphere.material.color.setHex(0xffffff);
          sphere.material.emissive.setHex(0x006644);
          ring.material.opacity = 0.8;
        } else {
          sphere.material.color.setHex(0x00ff88);
          sphere.material.emissive.setHex(0x004422);
          ring.material.opacity = 0.3;
        }
        
        // Subtle floating
        const originalY = features[index].position.y;
        sphereGroup.position.y = originalY + Math.sin(time * 1.8 + index) * 0.015;
      });

      // Animate particles
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0003;

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
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('click', onPointerClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedFeature]);

  const selectedFeatureData = selectedFeature ? features.find(f => f.id === selectedFeature) : null;

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Cinematic background elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-green-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_transparent_0%,_rgba(0,255,136,0.03)_50%,_transparent_100%)]" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-green-400 bg-clip-text text-transparent">
            Performance Features
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the innovative design that makes ÉVO HIIT+ the ultimate performance gear
          </p>
        </div>

        {/* 3D Showcase */}
        <div className="relative max-w-7xl mx-auto">
          <div ref={containerRef} className="relative">
            {/* Canvas with glass-like border */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm">
              <canvas 
                ref={canvasRef}
                className="w-full h-[700px] cursor-grab active:cursor-grabbing"
              />
              
              {/* Glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-2xl" />
            </div>
            
            {/* Dynamic feature tooltips */}
            {featureLabels.map((label) => {
              const feature = features.find(f => f.id === label.id);
              if (!feature || !label.visible) return null;
              
              const isSelected = selectedFeature === label.id;
              
              return (
                <div
                  key={label.id}
                  className={`absolute pointer-events-none transition-all duration-500 ease-out ${
                    isSelected ? 'z-30 scale-110' : 'z-20'
                  }`}
                  style={{
                    left: `${Math.min(Math.max(label.x, 200), window.innerWidth - 200)}px`,
                    top: `${Math.min(Math.max(label.y, 60), window.innerHeight - 120)}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div 
                    className={`relative backdrop-blur-md border rounded-xl p-4 min-w-[250px] max-w-[300px] transition-all duration-500 ${
                      isSelected 
                        ? 'bg-green-900/90 border-green-400/80 shadow-2xl shadow-green-400/30' 
                        : 'bg-black/70 border-white/20 shadow-lg'
                    }`}
                  >
                    {/* Glowing dot indicator */}
                    <div 
                      className={`absolute w-3 h-3 rounded-full ${
                        isSelected ? 'bg-green-400 shadow-lg shadow-green-400/50' : 'bg-white/60'
                      }`}
                      style={{
                        bottom: '-18px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }}
                    />
                    
                    {/* Content */}
                    <h4 className={`font-bold text-sm mb-2 ${
                      isSelected ? 'text-green-200' : 'text-white'
                    }`}>
                      {feature.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${
                      isSelected ? 'text-green-100' : 'text-gray-300'
                    }`}>
                      {feature.description}
                    </p>
                    
                    {/* Animated border glow for selected */}
                    {isSelected && (
                      <div className="absolute inset-0 rounded-xl border border-green-400/50 animate-pulse" />
                    )}
                  </div>
                </div>
              );
            })}
            
            {/* Loading state */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl">
                <div className="text-white flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="animate-spin rounded-full h-12 w-12 border-2 border-green-400/30" />
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-green-400 absolute inset-0" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
                  </div>
                  <span className="text-lg font-medium">Loading showcase...</span>
                </div>
              </div>
            )}
          </div>

          {/* Controls and features overview */}
          <div className="mt-12 text-center space-y-8">
            {/* Instructions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-300 mb-4">
                <span className="text-green-400 font-semibold">Drag to rotate</span> • 
                <span className="text-green-400 font-semibold ml-2">Click green dots</span> to explore features
              </p>
              
              {/* Explore all features button */}
              <button
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                <Play className="w-4 h-4" />
                <span>Explore All Features</span>
              </button>
            </div>

            {/* Feature overview grid */}
            {showAllFeatures && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in">
                {features.map((feature, index) => (
                  <div 
                    key={feature.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    onClick={() => setSelectedFeature(feature.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full mt-1 flex-shrink-0 shadow-lg shadow-green-400/50" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features3D;
