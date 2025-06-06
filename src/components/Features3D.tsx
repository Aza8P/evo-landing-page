
import React, { useRef, useEffect, useState } from 'react';

const Features3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const features = [
    {
      id: 1,
      title: "Anti-slip waistband",
      description: "Stays secure during intense movements",
      position: { x: 0, y: 0.8, z: 0 }
    },
    {
      id: 2,
      title: "Tummy control & all around support",
      description: "360-degree compression for confidence",
      position: { x: 0, y: 0.5, z: 0 }
    },
    {
      id: 3,
      title: "Fast-dry & sweat-wicking material",
      description: "Breathes as hard as you do",
      position: { x: 0.3, y: 0.2, z: 0 }
    },
    {
      id: 4,
      title: "Stays in place during saddle changes and HIIT transitions",
      description: "No riding up, no adjusting",
      position: { x: 0, y: 0, z: 0 }
    },
    {
      id: 5,
      title: "Built for endurance, not just looks",
      description: "Performance-first design",
      position: { x: -0.3, y: -0.2, z: 0 }
    },
    {
      id: 6,
      title: "Sculpts the butt area",
      description: "Enhances your natural shape",
      position: { x: 0, y: -0.4, z: 0.2 }
    },
    {
      id: 7,
      title: "Compression waistband",
      description: "Support without squeeze",
      position: { x: 0, y: 0.6, z: 0 }
    },
    {
      id: 8,
      title: "Smooth bonded waistband",
      description: "No-dig comfort technology",
      position: { x: 0, y: 0.7, z: 0 }
    }
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js setup
    const canvas = canvasRef.current;
    const scene = new (window as any).THREE.Scene();
    const camera = new (window as any).THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new (window as any).THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0);

    // Lighting
    const ambientLight = new (window as any).THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new (window as any).THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new (window as any).THREE.PointLight(0x00ff88, 0.5);
    pointLight.position.set(-5, 0, 5);
    scene.add(pointLight);

    // Create pants geometry (simplified representation)
    const pantsGroup = new (window as any).THREE.Group();
    
    // Main body
    const bodyGeometry = new (window as any).THREE.CylinderGeometry(1.2, 0.8, 2, 16);
    const bodyMaterial = new (window as any).THREE.MeshPhongMaterial({ 
      color: 0x1a1a1a,
      shininess: 30,
      transparent: true,
      opacity: 0.9
    });
    const body = new (window as any).THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.5;
    pantsGroup.add(body);

    // Legs
    const legGeometry = new (window as any).THREE.CylinderGeometry(0.4, 0.3, 1.5, 12);
    const legMaterial = new (window as any).THREE.MeshPhongMaterial({ 
      color: 0x1a1a1a,
      shininess: 30,
      transparent: true,
      opacity: 0.9
    });
    
    const leftLeg = new (window as any).THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.4, -0.75, 0);
    pantsGroup.add(leftLeg);
    
    const rightLeg = new (window as any).THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.4, -0.75, 0);
    pantsGroup.add(rightLeg);

    // Waistband
    const waistbandGeometry = new (window as any).THREE.TorusGeometry(1.2, 0.1, 8, 16);
    const waistbandMaterial = new (window as any).THREE.MeshPhongMaterial({ 
      color: 0x00ff88,
      shininess: 50
    });
    const waistband = new (window as any).THREE.Mesh(waistbandGeometry, waistbandMaterial);
    waistband.position.y = 1.5;
    waistband.rotation.x = Math.PI / 2;
    pantsGroup.add(waistband);

    scene.add(pantsGroup);

    // Feature highlight spheres
    const highlightSpheres = features.map((feature) => {
      const sphereGeometry = new (window as any).THREE.SphereGeometry(0.05, 8, 8);
      const sphereMaterial = new (window as any).THREE.MeshBasicMaterial({ 
        color: 0x00ff88,
        transparent: true,
        opacity: 0.8
      });
      const sphere = new (window as any).THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(feature.position.x, feature.position.y, feature.position.z);
      sphere.userData = { featureId: feature.id };
      pantsGroup.add(sphere);
      return sphere;
    });

    camera.position.set(0, 0, 4);

    // Mouse controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaMove = {
          x: e.clientX - previousMousePosition.x,
          y: e.clientY - previousMousePosition.y
        };

        pantsGroup.rotation.y += deltaMove.x * 0.01;
        pantsGroup.rotation.x += deltaMove.y * 0.01;
      }

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseClick = (e: MouseEvent) => {
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

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Gentle auto-rotation when not being dragged
      if (!isDragging) {
        pantsGroup.rotation.y += 0.005;
      }

      // Animate highlight spheres
      highlightSpheres.forEach((sphere, index) => {
        const time = Date.now() * 0.001;
        sphere.material.opacity = 0.6 + Math.sin(time + index) * 0.2;
        
        if (selectedFeature === sphere.userData.featureId) {
          sphere.scale.setScalar(1.5 + Math.sin(time * 4) * 0.2);
          sphere.material.color.setHex(0xffffff);
        } else {
          sphere.scale.setScalar(1);
          sphere.material.color.setHex(0x00ff88);
        }
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
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }}
            />
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-lg">
                <div className="text-white">Loading 3D model...</div>
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
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-2"></div>
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
                <div className="grid grid-cols-2 gap-4">
                  {features.slice(0, 4).map((feature) => (
                    <div 
                      key={feature.id}
                      className="text-sm text-gray-400 cursor-pointer hover:text-white transition-colors"
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

      {/* Three.js CDN */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    </section>
  );
};

export default Features3D;
