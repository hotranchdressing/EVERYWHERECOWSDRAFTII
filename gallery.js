const sceneConfigs = [
  {
    id: 1,
    name: "Cosmetics",
    viewportBackground: 'images/backgrounds/background1.jpg',
    outerBackground: '#fcfeff',
    products: [
      { 
        x: -8, y: 6, 
        imageWidth: 500,
        imageHeight: 1000,
        scale: 2.4,
        productName: "Bath Oils: Oleic Acid",
        imageUrl: 'images/cosmetics/bathoil.png',
        maskUrl: 'images/cosmetics/bathoilmask.png'
      },
      { 
        x: 0, y: 3, 
        imageWidth: 600,
        imageHeight: 1000,
        scale: 3,
        productName: "Collagen Shampoo: Collagen",
        imageUrl: 'images/cosmetics/collagenshampoo.png',
        maskUrl: 'images/cosmetics/collagenshampoomask.png'
      },
      { 
        x: -5, y: 1, 
        imageWidth: 800,
        imageHeight: 700,
        scale: 2.6,
        productName: "Cuticle Cream: Tallow Derivatives",
        imageUrl: 'images/cosmetics/cuticle.png',
        maskUrl: 'images/cosmetics/cuticlemask.png'
      },
      { 
        x: -3, y: -1, 
        imageWidth: 600,
        imageHeight: 500,
        scale: 2.4,
        productName: "Deodorant: Stearyl Alcohol",
        imageUrl: 'images/cosmetics/deo.png',
        maskUrl: 'images/cosmetics/deomask.png'
      },
      { 
        x: 3, y: -2, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 2.8,
        productName: "Bath Oils: Tallow, Oleic Acid",
        imageUrl: 'images/cosmetics/exfoliate.png',
        maskUrl: 'images/cosmetics/exfoliatemask.png'
      },
      { 
        x: -7, y: 4, 
        imageWidth: 400,
        imageHeight: 800,
        scale: 2.2,
        productName: "Foundation Makeup: Tallow Glycerides",
        imageUrl: 'images/cosmetics/foundation.png',
        maskUrl: 'images/cosmetics/foundationmask.png'
      },
      { 
        x: -8, y: -2, 
        imageWidth: 800,
        imageHeight: 1000,
        scale: 2.6,
        productName: "Hair Gel: Stearic Acid",
        imageUrl: 'images/cosmetics/hairgel.png',
        maskUrl: 'images/cosmetics/hairgelmask.png'
      },
      { 
        x: 8, y: 1, 
        imageWidth: 400,
        imageHeight: 650,
        scale: 2.4,
        productName: "Hand Sanitizer: Glycerin",
        imageUrl: 'images/cosmetics/handsani.png',
        maskUrl: 'images/cosmetics/handsanimask.png'
      },
      { 
        x: -3, y: 3, 
        imageWidth: 300,
        imageHeight: 900,
        scale: 2.2,
        productName: "Lipstick: Oleic Acid, Glycerin",
        imageUrl: 'images/cosmetics/lipstick.png',
        maskUrl: 'images/cosmetics/lipstickmask.png'
      },
      { 
        x: 3, y: 6, 
        imageWidth: 900,
        imageHeight: 1000,
        scale: 2.8,
        productName: "Liquid Hand Soap: Tallow Fatty Acids",
        imageUrl: 'images/cosmetics/liquidsoap.png',
        maskUrl: 'images/cosmetics/liquidsoapmask.png'
      },
      { 
        x: 6, y: 6, 
        imageWidth: 300,
        imageHeight: 600,
        scale: 2.2,
        productName: "Mascara: Stearic Acid",
        imageUrl: 'images/cosmetics/mascara.png',
        maskUrl: 'images/cosmetics/mascaramask.png'
      },
      { 
        x: -2, y: 7, 
        imageWidth: 700,
        imageHeight: 1000,
        scale: 2.6,
        productName: "Moisturizer: Glycerin, Oleic Acid, Collagen",
        imageUrl: 'images/cosmetics/moist.png',
        maskUrl: 'images/cosmetics/moistmask.png'
      },
      { 
        x: -5, y: 3, 
        imageWidth: 400,
        imageHeight: 550,
        scale: 2.4,
        productName: "Nail Polish: Stearic Acid",
        imageUrl: 'images/cosmetics/nailpolish.png',
        maskUrl: 'images/cosmetics/nailpolishmask.png'
      },
      { 
        x: 3, y: 1.5, 
        imageWidth: 600,
        imageHeight: 800,
        scale: 2.6,
        productName: "Perfume: Tallow Alcohols",
        imageUrl: 'images/cosmetics/perfume.png',
        maskUrl: 'images/cosmetics/perfumemask.png'
      },
      { 
        x: 0, y: -5, 
        imageWidth: 600,
        imageHeight: 1400,
        scale: 2.6,
        productName: "Shaving Cream: Stearic Acid",
        imageUrl: 'images/cosmetics/shavingcream.png',
        maskUrl: 'images/cosmetics/shavingcreammask.png'
      },
      { 
        x: -7, y: -6, 
        imageWidth: 400,
        imageHeight: 800,
        scale: 2.4,
        productName: "Bar Soap: Sodium Tallowate",
        imageUrl: 'images/cosmetics/soap.png',
        maskUrl: 'images/cosmetics/soapmask.png'
      },
    ]
  },{
    id: 2,
    name: "Construction",
    viewportBackground: 'images/backgrounds/background2.jpg',
    outerBackground: '#fcfeff',
    products: [
      { 
        x: -8, y: 6, 
        imageWidth: 500,
        imageHeight: 1000,
        scale: 8,
        productName: "Asphalt Binder Modifier: Bone Ash",
        imageUrl: 'images/construction/asphalt.png',
        maskUrl: 'images/construction/asphaltmask.png'
      },
      { 
        x: 0, y: 3, 
        imageWidth: 1100,
        imageHeight: 1000,
        scale: 6,
        productName: "Asphalt Shingles: Bone Ash",
        imageUrl: 'images/construction/asphaltshingle.png',
        maskUrl: 'images/construction/asphaltshinglemask.png'
      },
      { 
        x: -5, y: 1, 
        imageWidth: 800,
        imageHeight: 700,
        scale: 5,
        productName: "Brick: Stearates, Mold Release Agent",
        imageUrl: 'images/construction/brick.png',
        maskUrl: 'images/construction/brickmask.png'
      },
      { 
        x: -3, y: -1, 
        imageWidth: 600,
        imageHeight: 500,
        scale: 9,
        productName: "Caulk: Methyl Tallowate, Potassium Tallowate, Glycerol",
        imageUrl: 'images/construction/caulk.png',
        maskUrl: 'images/construction/caulkmask.png'
      },
      { 
        x: 3, y: -2, 
        imageWidth: 800,
        imageHeight: 800,
        scale: 6,
        productName: "Ceramic Tile (Glaze): Bone Ash",
        imageUrl: 'images/construction/ceramictile.png',
        maskUrl: 'images/construction/ceramictilemask.png'
      },
      { 
        x: -8, y: -2, 
        imageWidth: 800,
        imageHeight: 1000,
        scale: 7,
        productName: "Concrete Mix: Tallow",
        imageUrl: 'images/construction/concretemix.png',
        maskUrl: 'images/construction/concretemixmask.png'
      },
      { 
        x: -9, y: -8.5, 
        imageWidth: 700,
        imageHeight: 600,
        scale: 7,
        productName: "Insulation (SIP): Stearic Acid",
        imageUrl: 'images/construction/insulation.png',
        maskUrl: 'images/construction/insulationmask.png'
      },
      { 
        x: 3, y: 7, 
        imageWidth: 700,
        imageHeight: 900,
        scale: 7,
        productName: "Countertop Laminate: Stearic Acid",
        imageUrl: 'images/construction/countertoplaminate.png',
        maskUrl: 'images/construction/countertoplaminatemask.png'
      },
      { 
        x: 9, y: -8, 
        imageWidth: 1000,
        imageHeight: 1000,
        scale: 8,
        productName: "Drywall Joint Compound: Stearates",
        imageUrl: 'images/construction/drywall.png',
        maskUrl: 'images/construction/drywallmask.png'
      },
      { 
        x: 6, y: 6, 
        imageWidth: 1000,
        imageHeight: 600,
        scale: 8,
        productName: "Floor Wax: Stearic Acid",
        imageUrl: 'images/construction/floorwax.png',
        maskUrl: 'images/construction/floorwaxmask.png'
      },
      { 
        x: -1, y: -7.5, 
        imageWidth: 400,
        imageHeight: 550,
        scale: 8,
        productName: "Linoleum: Linseed Oil (Stearic Acid)",
        imageUrl: 'images/construction/linoleum.png',
        maskUrl: 'images/construction/linoleummask.png'
      },
      { 
        x: 0, y: 8, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 7,
        productName: "Porcelain Fixture: Bone Ash",
        imageUrl: 'images/construction/porcelainfixture.png',
        maskUrl: 'images/construction/porcelainfixturemask.png'
      },
      { 
        x: 0, y: -5, 
        imageWidth: 600,
        imageHeight: 650,
        scale: 4,
        productName: "Sandpaper Backing: Hide Glue",
        imageUrl: 'images/construction/sandpaperbacking.png',
        maskUrl: 'images/construction/sandpaperbackingmask.png'
      },
      { 
        x: -7, y: -6, 
        imageWidth: 700,
        imageHeight: 400,
        scale: 7,
        productName: "Tarpaper: Tallow-Modified Bitumen",
        imageUrl: 'images/construction/tarpaper.png',
        maskUrl: 'images/construction/tarpapermask.png'
      },
      { 
        x: 7, y: -2, 
        imageWidth: 700,
        imageHeight: 400,
        scale: 7,
        productName: "Waterproof Membrane: Tallow-Modified Bitumen",
        imageUrl: 'images/construction/waterproofmembrane.png',
        maskUrl: 'images/construction/waterproofmembranemask.png'
      },
    ]
  },
  {
    id: 3,
    name: "Agriculture",
    viewportBackground: 'images/backgrounds/background3.jpg',
    outerBackground: '#fcfeff',
    products: [
      { 
        x: -8, y: 6, 
        imageWidth: 500,
        imageHeight: 500,
        scale: 8,
        productName: "Baling Twine: Tallow",
        imageUrl: 'images/agriculture/balingtwine.png',
        maskUrl: 'images/agriculture/balingtwinemask.png'
      },
      { 
        x: -12, y: 2, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 8,
        productName: "Waterproof Membrane: Tallow-Modified Bitumen",
        productName: "Poultry Feed: Blood Meal",
        imageUrl: 'images/agriculture/bloodmealpoultryfeed.png',
        maskUrl: 'images/agriculture/bloodmealpoultryfeedmask.png'
      },
      { 
        x: 10, y: 8, 
        imageWidth: 900,
        imageHeight: 700,
        scale: 6,
        productName: "Greenhouse Glazing: Stearates",
        imageUrl: 'images/agriculture/greenhouseglazing.png',
        maskUrl: 'images/agriculture/greenhouseglazingmask.png'
      },
      { 
        x: -3, y: -1, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 15,
        productName: "Herbicide: Tallow Amines (Adjuvants)",
        imageUrl: 'images/agriculture/herbicide.png',
        maskUrl: 'images/agriculture/herbicidemask.png'
      },
      { 
        x: 3, y: -2, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 15,
        productName: "Hydroponics Growing Media Binder: Gelatin",
        imageUrl: 'images/agriculture/hydroponicsgrowingmediabinder.png',
        maskUrl: 'images/agriculture/hydroponicsgrowingmediabindermask.png'
      },
      { 
        x: 10, y: 4, 
        imageWidth: 400,
        imageHeight: 600,
        scale: 3,
        productName: "Irrrigation Drip Tape: Tallow Fatty Acids",
        imageUrl: 'images/agriculture/irrigationdriptape.png',
        maskUrl: 'images/agriculture/irrigationdriptapemask.png'
      },
      { 
        x: 8, y: -4, 
        imageWidth: 800,
        imageHeight: 800,
        scale: 10,
        productName: "Livestock Mineral Lick: Tallow",
        imageUrl: 'images/agriculture/minerallick.png',
        maskUrl: 'images/agriculture/minerallickmask.png'
      },
      { 
        x: 8, y: 1, 
        imageWidth: 400,
        imageHeight: 400,
        scale: 12,
        productName: "Mulch Film: Stearic Acid",
        imageUrl: 'images/agriculture/mulchfilm.png',
        maskUrl: 'images/agriculture/mulchfilmmask.png'
      },
      { 
        x: -3, y: 3, 
        imageWidth: 300,
        imageHeight: 350,
        scale: 8,
        productName: "Organic Bone Meal Fertilizer: Bone Meal",
        imageUrl: 'images/agriculture/organicbonemealfertilizer.png',
        maskUrl: 'images/agriculture/organicbonemealfertilizermask.png'
      },
      { 
        x: 3.5, y: 6, 
        imageWidth: 900,
        imageHeight: 900,
        scale: 9,
        productName: "Seed Coating: Tallow-Based Film Former",
        imageUrl: 'images/agriculture/seedcoating.png',
        maskUrl: 'images/agriculture/seedcoatingmask.png'
      },
      { 
        x: 0, y: -4, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 10,
        productName: "Tree Guard: Tallow",
        imageUrl: 'images/agriculture/treeguard.png',
        maskUrl: 'images/agriculture/treeguardmask.png'
      },
      { 
        x: 13, y: 7, 
        imageWidth: 700,
        imageHeight: 700,
        scale: 8,
        productName: "Tree Wound Dressing: Tallow",
        imageUrl: 'images/agriculture/treewound.png',
        maskUrl: 'images/agriculture/treewoundmask.png'
      },
    ]
  },
{
    id: 4,
    name: "Fuel",
    viewportBackground: 'images/backgrounds/background4.jpg',
    outerBackground: '#fcfeff',
    products: [
      { 
        x: 0, y: 6, 
        imageWidth: 700,
        imageHeight: 500,
        scale: 8,
        productName: "Biodiesel: Tallow Methyl Ester",
        imageUrl: 'images/fuel/biodiesel.png',
        maskUrl: 'images/fuel/biodieselmask.png'
      },
      { 
        x: 7, y: -7.5, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 8,
        productName: "Briquette: Tallow (binder)",
        imageUrl: 'images/fuel/briquette.png',
        maskUrl: 'images/fuel/briquettemask.png'
      },
      { 
        x: -12, y: -6, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 8,
        productName: "Metalworking Cutting Fluid: Tallow Fatty Acids, Tallow Amines",
        imageUrl: 'images/fuel/cuttingoil.png',
        maskUrl: 'images/fuel/cuttingoilmask.png'
      },
      { 
        x: -1, y: -2, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 15,
        productName: "Heating Oil Additive: Tallow",
        imageUrl: 'images/fuel/heatingoiladditive.png',
        maskUrl: 'images/fuel/heatingoiladditivemask.png'
      },
      { 
        x: -4, y: 4, 
        imageWidth: 700,
        imageHeight: 600,
        scale: 7,
        productName: "Jet Fuel: Tallow",
        imageUrl: 'images/fuel/jetfuelantiice.png',
        maskUrl: 'images/fuel/jetfuelantiicemask.png'
      },
      { 
        x: -3, y: -6, 
        imageWidth: 800,
        imageHeight: 800,
        scale: 10,
        productName: "Lighter Fluid Additive: Glycerol",
        imageUrl: 'images/fuel/lighterfluidadditive.png',
        maskUrl: 'images/fuel/lighterfluidadditivemask.png'
      },
      { 
        x: 14, y: 1, 
        imageWidth: 600,
        imageHeight: 400,
        scale: 12,
        productName: "Marine Fuel Additive: Fatty Acid Methyl Esters",
        imageUrl: 'images/fuel/marinefueladditive.png',
        maskUrl: 'images/fuel/marinefueladditivemask.png'
      },
    
    ]
  },
{
    id: 5,
    name: "Plastic",
    viewportBackground: 'images/backgrounds/background5.jpg',
    outerBackground: '#fcfeff',
    products: [
      { 
        x: 0, y: 6, 
        imageWidth: 700,
        imageHeight: 400,
        scale: 8,
        productName: "Bio-Plastic (PHA): Tallow, Manure, Offal (feedstock)",
        imageUrl: 'images/plastics/bioplastic.png',
        maskUrl: 'images/plastics/bioplasticmask.png'
      },
      { 
        x: 7, y: -7.5, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 8,
        productName: "Phone Case (Thermoplastic Elastomers): Stearic Acid",
        imageUrl: 'images/plastics/phonecase.png',
        maskUrl: 'images/plastics/phonecasemask.png'
      },
      { 
        x: -12, y: -6, 
        imageWidth: 900,
        imageHeight: 600,
        scale: 8,
        productName: "Pool Liner: Stearic Acid",
        imageUrl: 'images/plastics/poolliner.png',
        maskUrl: 'images/plastics/poollinermask.png'
      },
      { 
        x: -1, y: -2, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 12,
        productName: "PVC Film: Stearic Acid",
        imageUrl: 'images/plastics/pvcfilm.png',
        maskUrl: 'images/plastics/pvcfilmmask.png'
      },
      { 
        x: 0, y: -8, 
        imageWidth: 700,
        imageHeight: 600,
        scale: 7,
        productName: "PVC Tubing: Stearic Acid",
        imageUrl: 'images/plastics/pvctube.png',
        maskUrl: 'images/plastics/pvctubemask.png'
      },
      { 
        x: -3, y: -6, 
        imageWidth: 800,
        imageHeight: 1000,
        scale: 10,
        productName: "Raincoat: Stearic Acid",
        imageUrl: 'images/plastics/raincoat.png',
        maskUrl: 'images/plastics/raincoatmask.png'
      },
      { 
        x: 6, y: 1, 
        imageWidth: 400,
        imageHeight: 400,
        scale: 12,
        productName: "Rubber Boots: Stearic Acid",
        imageUrl: 'images/plastics/rubberboots.png',
        maskUrl: 'images/plastics/rubberbootsmask.png'
      },
      { 
        x: -8, y: 5, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 12,
        productName: "Shower Liner: Stearic Acid",
        imageUrl: 'images/plastics/showerliner.png',
        maskUrl: 'images/plastics/showerlinermask.png'
      },
      { 
        x: 4, y: -6, 
        imageWidth: 700,
        imageHeight: 600,
        scale: 7,
        productName: "Tarp: Stearic Acid",
        imageUrl: 'images/plastics/tarp.png',
        maskUrl: 'images/plastics/tarpmask.png'
      },
      { 
        x: 4, y: 6, 
        imageWidth: 800,
        imageHeight: 1000,
        scale: 10,
        productName: "Inflatable Boat: Stearic Acid",
        imageUrl: 'images/plastics/vinylboat.png',
        maskUrl: 'images/plastics/vinylboatmask.png'
      },
      { 
        x: 3, y: 1, 
        imageWidth: 400,
        imageHeight: 400,
        scale: 12,
        productName: "Rock Climbing Hold: Tallow fatty acids",
        imageUrl: 'images/plastics/vinylrockhold.png',
        maskUrl: 'images/plastics/vinylrockholdmask.png'
      },
    
    ]
  },
{
    id: 5,
    name: "Pharma",
    viewportBackground: 'images/backgrounds/background6.jpg',
    outerBackground: '#fcfeff',
    products: [
      { 
        x: 0, y: 6, 
        imageWidth: 700,
        imageHeight: 400,
        scale: 8,
        productName: "Absorbable Suture: Collagen",
        imageUrl: 'images/pharma/catgutsuture.png',
        maskUrl: 'images/pharma/catgutsuturemask.png'
      },
      { 
        x: 10, y: -6.5, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 8,
        productName: "Bone Marrow Aspirate Scaffold: Demineralized Bone Matrix",
        imageUrl: 'images/pharma/demineralizedbonematrix.png',
        maskUrl: 'images/pharma/demineralizedbonematrix.png'
      },
      { 
        x: -12, y: -6, 
        imageWidth: 900,
        imageHeight: 600,
        scale: 8,
        productName: "Tablet Pharmaceuticals: Lactose (Diluent)",
        imageUrl: 'images/pharma/diluent.png',
        maskUrl: 'images/pharma/diluentmask.png'
      },
      { 
        x: -6, y: -2, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 12,
        productName: "Gel Capsules: Gelatin",
        imageUrl: 'images/pharma/gelcaps.png',
        maskUrl: 'images/pharma/gelcapsmask.png'
      },
      { 
        x: 5, y: -1, 
        imageWidth: 700,
        imageHeight: 800,
        scale: 7,
        productName: "Joint Supplement: Chondroitin Sulfate",
        imageUrl: 'images/pharma/glucochond.png',
        maskUrl: 'images/pharma/glucochondmask.png'
      },
      { 
        x: -3, y: -6, 
        imageWidth: 800,
        imageHeight: 1000,
        scale: 7,
        productName: "Heparin (Anticoagulant): Bovine Intestinal Mucosa",
        imageUrl: 'images/pharma/heparin.png',
        maskUrl: 'images/pharma/heparinmask.png'
      },
      { 
        x: 10, y: 8, 
        imageWidth: 600,
        imageHeight: 400,
        scale: 12,
        productName: "Hyaluronic Acid Injection: Hyaluronic Acid (Umbilical Cord, Joint Fluid)",
        imageUrl: 'images/pharma/hyaluronicinj.png',
        maskUrl: 'images/pharma/hyaluronicinjmask.png'
      },
      { 
        x: -8, y: 5, 
        imageWidth: 800,
        imageHeight: 500,
        scale: 12,
        productName: "Insulin: Pancreatic Tissue",
        imageUrl: 'images/pharma/insulin.png',
        maskUrl: 'images/pharma/insulinmask.png'
      },
      { 
        x: 4, y: -6, 
        imageWidth: 700,
        imageHeight: 700,
        scale: 7,
        productName: "Prosthetic Heart Valve: Percardium Tissue",
        imageUrl: 'images/pharma/prostheticheartvalve.png',
        maskUrl: 'images/pharma/prostheticheartvalvemask.png'
      },
    
    ]
  },
  {
    id: 6,
    name: "6",
    viewportBackground: 'images/backgrounds/background6.jpg',
    outerBackground: '#fcfeff',
    products: [{ 
        x: 0, y: 6, 
        imageWidth: 700,
        imageHeight: 400,
        scale: 8,
        productName: "Acrylic Paint: Tallow-Modified Emulsifier",
        imageUrl: 'images/colors/acrylicpaint.png',
        maskUrl: 'images/colors/acrylicpaintmask.png'
      },
      { 
        x: 9, y: -6.5, 
        imageWidth: 300,
        imageHeight: 600,
        scale: 8,
        productName: "Ballpoint Pen Ink: Tallow-Based Carriers",
        imageUrl: 'images/colors/ballpointpen.png',
        maskUrl: 'images/colors/ballpointpenmask.png'
      },
      { 
        x: 0, y: -6, 
        imageWidth: 900,
        imageHeight: 600,
        scale: 8,
        productName: "Colored Pencils: Tallow Binders",
        imageUrl: 'images/colors/coloredpencils.png',
        maskUrl: 'images/colors/coloredpencilsmask.png'
      },
      { 
        x: -6, y: -2, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 12,
        productName: "Crayons: Tallow",
        imageUrl: 'images/colors/crayons.png',
        maskUrl: 'images/colors/crayonsmask.png'
      },
      { 
        x: 5, y: -1, 
        imageWidth: 700,
        imageHeight: 800,
        scale: 7,
        productName: "Enamel Paint: Tallow-Modified Resins",
        imageUrl: 'images/colors/enamelpaint.png',
        maskUrl: 'images/colors/enamelpaintmask.png'
      },
      { 
        x: 0, y: 0, 
        imageWidth: 800,
        imageHeight: 1000,
        scale: 7,
        productName: "Fabric Dye: Tallow Based Mordant Carrier",
        imageUrl: 'images/colors/fabricdye.png',
        maskUrl: 'images/colors/fabricdyemask.png'
      },
      { 
        x: 10, y: 8, 
        imageWidth: 600,
        imageHeight: 400,
        scale: 12,
        productName: "House Paint: Tallow Fatty Acids",
        imageUrl: 'images/colors/housepaint.png',
        maskUrl: 'images/colors/housepaintmask.png'
      },
      { 
        x: -8, y: 5, 
        imageWidth: 800,
        imageHeight: 500,
        scale: 12,
        productName: "Marker: Tallow Based Solvent Carrier",
        imageUrl: 'images/colors/marker.png',
        maskUrl: 'images/colors/markermask.png'
      },
      { 
        x: 4, y: -6, 
        imageWidth: 700,
        imageHeight: 700,
        scale: 7,
        productName: "Printer Ink: Soy-Tallow Blends",
        imageUrl: 'images/colors/printerink.png',
        maskUrl: 'images/colors/printerinkmask.png'
      },
    { 
        x: -10, y: 8, 
        imageWidth: 500,
        imageHeight: 400,
        scale: 8,
        productName: "Tattoo Ink: Tallow-Based Suspension Medium",
        imageUrl: 'images/colors/tattooink.png',
        maskUrl: 'images/colors/tattooinkmask.png'
      },
      { 
        x: 10, y: 2, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 8,
        productName: "Watercolor Paint (Binder): Gelatin, Collagen",
        imageUrl: 'images/colors/watercolorpaint.png',
        maskUrl: 'images/colors/watercolorpaintmask.png'
      },
      { 
        x: -12, y: -6, 
        imageWidth: 900,
        imageHeight: 600,
        scale: 8,
        productName: "Wood Stain: Tallow-Modified Oil Carrier",
        imageUrl: 'images/colors/woodstain.png',
        maskUrl: 'images/colors/woodstainmask.png'
      }
    
    ]},{
    id: 8,
    name: "8",
    viewportBackground: 'images/backgrounds/background7.jpg',
    outerBackground: '#fcfeff',
    products: [{ 
        x: 0, y: 6, 
        imageWidth: 400,
        imageHeight: 700,
        scale: 14,
        productName: "Bottle Label Adhesive: Casein",
        imageUrl: 'images/glue/bottlelabelglue.png',
        maskUrl: 'images/glue/bottlelabelgluemask.png'
      },
      { 
        x: 9, y: -6, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 14,
        productName: "Drum Head Adhesive: Hide Glue",
        imageUrl: 'images/glue/drumhead.png',
        maskUrl: 'images/glue/drumheadmask.png'
      },
      { 
        x: 0, y: -6, 
        imageWidth: 900,
        imageHeight: 600,
        scale: 14,
        productName: "Envelope Sealing Gum: Gelatin, Collagen",
        imageUrl: 'images/glue/envelopeglue.png',
        maskUrl: 'images/glue/envelopegluemask.png'
      },
      { 
        x: -10, y: -2, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 12,
        productName: "Fabric Glue: Gelatin, Collagen",
        imageUrl: 'images/glue/fabricglue.png',
        maskUrl: 'images/glue/fabricgluemask.png'
      },
      { 
        x: -2, y: 8, 
        imageWidth: 700,
        imageHeight: 800,
        scale: 8,
        productName: "Gesso Adhesive (Paint Primer): Gelatin (Pigment Binder)",
        imageUrl: 'images/glue/gessoadhesive.png',
        maskUrl: 'images/glue/gessoadhesivemask.png'
      },
      { 
        x: -5, y: 4, 
        imageWidth: 800,
        imageHeight: 1000,
        scale: 12,
        productName: "Specialty Wood Glues (Luthier): Hide Glue",
        imageUrl: 'images/glue/hideglue.png',
        maskUrl: 'images/glue/hidegluemask.png'
      },
      { 
        x: 5, y: 6, 
        imageWidth: 600,
        imageHeight: 500,
        scale: 9,
        productName: "Wallpaper Paste: Gelatin, Collagen",
        imageUrl: 'images/glue/wallpaperpaste.png',
        maskUrl: 'images/glue/wallpaperpastemask.png'
      },
      
    ]},

      {
    id: 7,
    name: "7",
    viewportBackground: 'images/backgrounds/background8.jpg',
    outerBackground: '#fcfeff',
    products: [{ 
        x: 0, y: 6, 
        imageWidth: 700,
        imageHeight: 800,
        scale: 8,
        productName: "Milk Replacer (Calves): Colostrum, Bovine Blood Plasma",
        imageUrl: 'images/animalfood/calf.png',
        maskUrl: 'images/animalfood/calfmask.png'
      },
      { 
        x: 9, y: -3, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 8,
        productName: "Cat Food: Beef Meal",
        imageUrl: 'images/animalfood/cat.png',
        maskUrl: 'images/animalfood/catmask.png'
      },
      { 
        x: 0, y: -6, 
        imageWidth: 900,
        imageHeight: 600,
        scale: 8,
        productName: "Poultry Feed: Blood Meal",
        imageUrl: 'images/animalfood/chicken.png',
        maskUrl: 'images/animalfood/chickenmask.png'
      },
      { 
        x: -6, y: -2, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 12,
        productName: "Dog Food: Beef Meal",
        imageUrl: 'images/animalfood/dogs.png',
        maskUrl: 'images/animalfood/dogsmask.png'
      },
      { 
        x: 5, y: -1, 
        imageWidth: 700,
        imageHeight: 800,
        scale: 7,
        productName: "Horse Feed Supplement: Beef Protein Isolate",
        imageUrl: 'images/animalfood/horses.png',
        maskUrl: 'images/animalfood/horsesmask.png'
      },
      { 
        x: 4, y: 2, 
        imageWidth: 1000,
        imageHeight: 1000,
        scale: 7,
        productName: "Zoo Carnivore Diet: Whole Beef Carcass Parts",
        imageUrl: 'images/animalfood/lion.png',
        maskUrl: 'images/animalfood/lionmask.png'
      },
      { 
        x: 10, y: 5, 
        imageWidth: 600,
        imageHeight: 400,
        scale: 12,
        productName: "Mink Feed (Fur Farming): Beef Byproducts",
        imageUrl: 'images/animalfood/mink.png',
        maskUrl: 'images/animalfood/minkmask.png'
      },
      { 
        x: -8, y: 5, 
        imageWidth: 800,
        imageHeight: 700,
        scale: 6,
        productName: "Reptile Food (Carnivorous): Beef Heart, Liver",
        imageUrl: 'images/animalfood/monitorlizard.png',
        maskUrl: 'images/animalfood/monitorlizardmask.png'
      },
      { 
        x: 4, y: -6, 
        imageWidth: 900,
        imageHeight: 700,
        scale: 7,
        productName: "Swine Feed: Bone Meal, Blood Meal",
        imageUrl: 'images/animalfood/pigs.png',
        maskUrl: 'images/animalfood/pigsmask.png'
      },
    { 
        x: -10, y: 2, 
        imageWidth: 800,
        imageHeight: 400,
        scale: 8,
        productName: "Salmon Feed (Fish Farming): Tallow",
        imageUrl: 'images/animalfood/salmon.png',
        maskUrl: 'images/animalfood/salmonmask.png'
      }
    ]},

    {
    id: 9,
    name: "9",
    viewportBackground: 'images/backgrounds/background9.jpg',
    outerBackground: '#fcfeff',
    products: [{ 
        x: 0, y: 6, 
        imageWidth: 700,
        imageHeight: 800,
        scale: 8,
        productName: "Bicycle Saddle: Hide",
        imageUrl: 'images/upholstery/bicyclesaddle.png',
        maskUrl: 'images/upholstery/bicyclesaddlemask.png'
      },
      { 
        x: 12, y: 0, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 8,
        productName: "Booth: Hide",
        imageUrl: 'images/upholstery/booth.png',
        maskUrl: 'images/upholstery/boothmask.png'
      },
      { 
        x: 0, y: -6, 
        imageWidth: 900,
        imageHeight: 600,
        scale: 8,
        productName: "Chair: Hide",
        imageUrl: 'images/upholstery/chair.png',
        maskUrl: 'images/upholstery/chairmask.png'
      },
      { 
        x: -13, y: -2, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 12,
        productName: "Headboard: Hide",
        imageUrl: 'images/upholstery/headboard.png',
        maskUrl: 'images/upholstery/headboardmask.png'
      },
    ]},

    {
    id: 10,
    name: "10",
    viewportBackground: 'images/backgrounds/background10.jpg',
    outerBackground: '#fcfeff',
    products: [{ 
        x: 0, y: 6, 
        imageWidth: 700,
        imageHeight: 800,
        scale: 8,
        productName: "Belt: Hide",
        imageUrl: 'images/clothing/belt.png',
        maskUrl: 'images/clothing/beltmask.png'
      },
      { 
        x: 8, y: -3, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 8,
        productName: "Gloves: Hide",
        imageUrl: 'images/clothing/gloves.png',
        maskUrl: 'images/clothing/glovesmask.png'
      },
      { 
        x: -7, y: 7, 
        imageWidth: 900,
        imageHeight: 600,
        scale: 8,
        productName: "Hat: Hide",
        imageUrl: 'images/clothing/hat.png',
        maskUrl: 'images/clothing/hatmask.png'
      },
      { 
        x: -13, y: -2, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 12,
        productName: "Heels: Hide",
        imageUrl: 'images/clothing/heels.png',
        maskUrl: 'images/clothing/heelsmask.png'
      },
      { 
        x: -5, y: 0, 
        imageWidth: 700,
        imageHeight: 800,
        scale: 7,
        productName: "Purse: Hide",
        imageUrl: 'images/clothing/purse.png',
        maskUrl: 'images/clothing/pursemask.png'
      },
      { 
        x: 1, y: -8, 
        imageWidth: 1000,
        imageHeight: 1000,
        scale: 7,
        productName: "Shoes: Hide",
        imageUrl: 'images/clothing/shoes.png',
        maskUrl: 'images/clothing/shoesmask.png'
      },
      { 
        x: 0, y: 0, 
        imageWidth: 400,
        imageHeight: 400,
        scale: 2,
        productName: "Watch Wristband: Hide",
        imageUrl: 'images/clothing/watch.png',
        maskUrl: 'images/clothing/watchmask.png'
      },
    ]},

   {
    id: 11,
    name: "11",
    viewportBackground: 'images/backgrounds/background11.jpg',
    outerBackground: '#fcfeff',
    products: [{ 
        x: 7, y: 6, 
        imageWidth: 300,
        imageHeight: 550,
        scale: 5,
        productName: "Beer: Gelatin (Fining Agent)",
        imageUrl: 'images/peoplefood/beer.png',
        maskUrl: 'images/peoplefood/beermask.png'
      },
      { 
        x: 9, y: -3, 
        imageWidth: 600,
        imageHeight: 600,
        scale: 8,
        productName: "Candy Corn: Gelatin",
        imageUrl: 'images/peoplefood/candycorn.png',
        maskUrl: 'images/peoplefood/candycornmask.png'
      },
      { 
        x: -2, y: -6, 
        imageWidth: 900,
        imageHeight: 600,
        scale: 8,
        productName: "Cheese: Dairy, Rennet",
        imageUrl: 'images/peoplefood/cheees.png',
        maskUrl: 'images/peoplefood/cheeesmask.png'
      },
      { 
        x: -6, y: -2, 
        imageWidth: 800,
        imageHeight: 600,
        scale: 7,
        productName: "Gummies: Gelatin",
        imageUrl: 'images/peoplefood/gummies.png',
        maskUrl: 'images/peoplefood/gummiesmask.png'
      },
      { 
        x: 3, y: -1, 
        imageWidth: 1000,
        imageHeight: 800,
        scale: 7,
        productName: "Jello: Gelatin",
        imageUrl: 'images/peoplefood/jello.png',
        maskUrl: 'images/peoplefood/jellomask.png'
      },
      { 
        x: 13, y: 7, 
        imageWidth: 1000,
        imageHeight: 1000,
        scale: 7,
        productName: "Marshmallows: Gelatin",
        imageUrl: 'images/peoplefood/marshmallow.png',
        maskUrl: 'images/peoplefood/marshmallowmask.png'
      },
      { 
        x: 0, y: 6, 
        imageWidth: 400,
        imageHeight: 400,
        scale: 10,
        productName: "Beef: Beef",
        imageUrl: 'images/peoplefood/steak.png',
        maskUrl: 'images/peoplefood/steakmask.png'
      },
      { 
        x: -8, y: 3, 
        imageWidth: 800,
        imageHeight: 900,
        scale: 6,
        productName: "White Sugar: Bone Char (Filter Aid)",
        imageUrl: 'images/peoplefood/whitesugar.png',
        maskUrl: 'images/peoplefood/whitesugarmask.png'
      },
      { 
        x: -14, y: -6, 
        imageWidth: 600,
        imageHeight: 700,
        scale: 7,
        productName: "Wine: Gelatin (Fining Agent)",
        imageUrl: 'images/peoplefood/wine.png',
        maskUrl: 'images/peoplefood/winemask.png'
      },
    ]},
];

const galleryContainer = document.getElementById("product-gallery");

sceneConfigs.forEach((scene, index) => {
  // Create heading for the scene
  const heading = document.createElement("h2");
  heading.style.marginTop = "50px";      // space above each category
  heading.style.marginBottom = "24px";   // space below the heading
  galleryContainer.appendChild(heading);

  // Create grid container
  const grid = document.createElement("div");
  grid.className = "gallery-grid";
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
  grid.style.gap = "20px";               // space between products
  grid.style.marginBottom = "80px";      // extra space after the grid
  galleryContainer.appendChild(grid);

    scene.products.forEach(product => {
    // Container for image + product name
    const productBox = document.createElement("div");
    productBox.style.position = "relative";
    productBox.style.cursor = "pointer";

    // Image
    const img = document.createElement("img");
    img.src = product.imageUrl;
    img.alt = product.productName;
    img.style.width = "100%";
    productBox.appendChild(img);

    // Product name element
    const nameOverlay = document.createElement("div");
    nameOverlay.style.position = "absolute";
    nameOverlay.style.top = "0";
    nameOverlay.style.left = "0";
    nameOverlay.style.width = "100%";
    nameOverlay.style.backgroundColor = "rgba(0,0,0,0.6)";
    nameOverlay.style.color = "white";
    nameOverlay.style.fontSize = "14px";
    nameOverlay.style.padding = "4px";
    nameOverlay.style.textAlign = "center";
    nameOverlay.style.display = "none"; // hidden by default
    productBox.appendChild(nameOverlay);

    // Show name on click
    productBox.addEventListener("click", () => {
      nameOverlay.textContent = product.productName;
      nameOverlay.style.display = "block";
    });

    grid.appendChild(productBox);
  });
});

// --- EMBEDDED YOUTUBE BACKGROUND VIDEOS ---

const galleryVideoContainer = document.getElementById("gallery-video");
const youtubeIDs = ["uA8dAnlD51o", "GTlPsWJLOPY", "-dQTd_zqyXo", "huT5__BqY_U", "cvOBPzB2Les", "mmOf3u3cuMc", "vuKfN5EHH8M", "Y_qdSxF1DCk", "8wC3Y7MuRts", "UbtylnIHQXA", "EqcXtmFZpqw", "zv2ra9E8Tmk", "kMThtOVbkPg", "k1eB6MX4mFQ", "tRHfr0HWPEY", "1IYDIC3q3Nk", "1XCAucWO2qE", "OYTim_tmUH0", "oKaqOdmvo5M", "kqLCR5KV2SM", "CnhDLuF2fbc", "D5FWMjPqaJ8", "buDaLiT10XM", "GMyj6rM00qY", "KjmuBo8xoCU", "-t6htBLENvY", "4QIY2BYtJhM", "MtouOnPFGS0", "LGf3YlECWpA", "4PG9E23bqS0", "7Bze05BMU1s", "q8qRRCuY_V8", "q6DSQG0xM8w&t"];

youtubeIDs.forEach(id => {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&loop=1&mute=1&playlist=${id}&controls=0&modestbranding=1`;
  iframe.style.top = Math.random() * 80 + "%";
  iframe.style.left = Math.random() * 80 + "%";
  galleryVideoContainer.appendChild(iframe);
});

// Function to randomly move videos
function randomizeVideoPositions() {
  const galleryHeight = document.body.scrollHeight;
  const galleryWidth = window.innerWidth;

  videoContainer.querySelectorAll("iframe").forEach(iframe => {
    const randomTop = Math.random() * (galleryHeight - 200);
    const randomLeft = Math.random() * (galleryWidth - 350);
    iframe.style.top = `${randomTop}px`;
    iframe.style.left = `${randomLeft}px`;
  });
}

// Initial position
randomizeVideoPositions();

// Move them every 10 seconds
setInterval(randomizeVideoPositions, 10000);

