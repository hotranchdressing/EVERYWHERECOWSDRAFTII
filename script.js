// Scene data with ALL products
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
    products: [
    ]},

      {
    id: 6,
    name: "7",
    viewportBackground: 'images/backgrounds/background7.jpg',
    outerBackground: '#fcfeff',
    products: [
    ]},

      {
    id: 8,
    name: "8",
    viewportBackground: 'images/backgrounds/background8.jpg',
    outerBackground: '#fcfeff',
    products: [
    ]},

    {
    id: 9,
    name: "9",
    viewportBackground: 'images/backgrounds/background9.jpg',
    outerBackground: '#fcfeff',
    products: [
    ]},

    {
    id: 10,
    name: "10",
    viewportBackground: 'images/backgrounds/background10.jpg',
    outerBackground: '#fcfeff',
    products: [
    ]},

   {
    id: 11,
    name: "11",
    viewportBackground: 'images/backgrounds/background11.jpg',
    outerBackground: '#fcfeff',
    products: [
    ]},

    {
    id: 12,
    name: "12",
    viewportBackground: 'images/backgrounds/background12.jpg',
    outerBackground: '#fcfeff',
    products: [
    ]},

    {
    id: 13,
    name: "13",
    viewportBackground: 'images/backgrounds/background13.jpg',
    outerBackground: '#fcfeff',
    products: [
    ]},

    {
    id: 14,
    name: "14",
    viewportBackground: 'images/backgrounds/background14.jpg',
    outerBackground: '#fcfeff',
    products: [
    ]},

    {
    id: 15,
    name: "15",
    viewportBackground: 'images/backgrounds/background15.jpg',
    outerBackground: '#fcfeff',
    products: [
    ]},

    {
    id: 16,
    name: "16",
    viewportBackground: 'images/backgrounds/background16.jpg',
    outerBackground: '#fcfeff',
    products: [
    ]},
];

// State management
let scene, camera, renderer, ballMesh, ballBody;
let currentSceneIndex = 1;
let scrollLocked = true;
let ballTouchedBottom = false;
let lastScrollTime = 0;
const SCROLL_COOLDOWN = 500;
const GROUND_Y = -10;

function updateBackground(viewportBg, outerBg) {
  // Update viewport (canvas container)
  const container = document.getElementById('canvas-container');
  if (container && viewportBg) {
    if (viewportBg.startsWith('#') || viewportBg.startsWith('rgb')) {
      // It's a color
      container.style.background = viewportBg;
    } else {
      // It's an image URL
      container.style.backgroundImage = `url('${viewportBg}')`;
      container.style.backgroundSize = 'cover';
      container.style.backgroundPosition = 'center';
    }
  }
  
  // Update outer frame
  const outerFrame = document.querySelector('.outer-frame');
  if (outerFrame && outerBg) {
    if (outerBg.startsWith('#') || outerBg.startsWith('rgb')) {
      // It's a color
      outerFrame.style.background = outerBg;
    } else {
      // It's an image URL
      outerFrame.style.backgroundImage = `url('${outerBg}')`;
      outerFrame.style.backgroundSize = 'cover';
      outerFrame.style.backgroundPosition = 'center';
    }
  }
}

function initScene() {
  const container = document.getElementById('canvas-container');
  const width = container.clientWidth;
  const height = container.clientHeight;

  // Scene setup
  scene = new THREE.Scene();
  scene.background = null;

  // Camera - use container dimensions
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 15;

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0); // transparent background
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);
  
  // Add event listeners
renderer.domElement.addEventListener('mousedown', onMouseDown);
renderer.domElement.addEventListener('mousemove', onMouseMove);
renderer.domElement.addEventListener('mouseup', onMouseUp);
renderer.domElement.addEventListener('mouseleave', onMouseUp);

  // Lighting
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  light.castShadow = true;
  scene.add(light);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Initialize UI
  initProgressMap();

  // Load first scene
  loadScene(0

  );

  // Start animation loop
  animate();

  // Handle window resize
  window.addEventListener('resize', handleResize);
}

function initProgressMap() {
  const progressMap = document.getElementById('progress-map');
  if (!progressMap) return;
  progressMap.innerHTML = '';
  
  for (let i = 0; i < sceneConfigs.length; i++) {
    const dot = document.createElement('div');
    dot.className = 'scene-dot';
    dot.dataset.scene = i;
    dot.addEventListener('click', () => jumpToScene(i));
    progressMap.appendChild(dot);
  }

  updateProgressMap(0);
}

function updateProgressMap(index) {
  document.querySelectorAll('.scene-dot').forEach((dot, i) => {
    dot.classList.remove('active', 'visited');
    if (i === index) {
      dot.classList.add('active');
    } else if (i < index) {
      dot.classList.add('visited');
    }
  });
  
    const sceneCounter = document.getElementById('current-scene');
  if (sceneCounter) { // ADD THIS CHECK
    sceneCounter.textContent = index + 1;
  }

  document.getElementById('current-scene').textContent = index + 1;
}

function updateSceneTracker(index) {
  const trackerImg = document.getElementById('scene-tracker-img');
  if (trackerImg) {
    trackerImg.src = `images/maps/map${index + 1}.png`;
  }
}

function loadScene(index) {
  console.log('loadScene called with index:', index, 'at', Date.now());
  console.trace(); 
  if (index < 0 || index >= sceneConfigs.length) return;

  currentSceneIndex = index;
  ballTouchedBottom = false;
  scrollLocked = true;
  productMeshes = [];

  // Enable traces only in final scene
  isDrawingTraces = (index === sceneConfigs.length - 1);
  lastTracePos = null;
  
  // Initialize trace canvas if needed
  if (isDrawingTraces && !traceCtx) {
    initTraceCanvas();
  }

  // Clear scene (keep lights)
  scene.children = scene.children.filter(child => child instanceof THREE.Light);

  const sceneConfig = sceneConfigs[index];

    // Update background
if (sceneConfig.viewportBackground || sceneConfig.outerBackground) {
  updateBackground(sceneConfig.viewportBackground, sceneConfig.outerBackground);
}

function worldToScreen(worldX, worldY) {
  // Convert Three.js world coordinates to screen pixels
  const vector = new THREE.Vector3(worldX, worldY, 0);
  vector.project(camera);
  
  const x = (vector.x + 1) / 2 * traceCanvas.width;
  const y = (-vector.y + 1) / 2 * traceCanvas.height;
  
  return { x, y };
}
  // Create ball
  const ballRadius = 0.5;
  const ballGeometry = new THREE.SphereGeometry(ballRadius, 32, 32);
  const ballMaterial = new THREE.MeshStandardMaterial({
    color: '#bf2b2b',
    metalness: 0.3,
    roughness: 0.8,
  });
  ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
  ballMesh.castShadow = true;
  scene.add(ballMesh);

  ballBody = { x: 0, y: 15, vx: 0, vy: 0, radius: ballRadius };

  // Load products
  const textureLoader = new THREE.TextureLoader();
  const productCollisionData = [];

  sceneConfig.products.forEach((product, idx) => {
    // Calculate actual w and h based on aspect ratio
    const aspectRatio = product.imageWidth / product.imageHeight;
    const baseSize = product.scale;

    let w, h;
    if (aspectRatio > 1) {
      w = baseSize * aspectRatio;
      h = baseSize;
    } else {
      w = baseSize;
      h = baseSize / aspectRatio;
    }

   // Load and display product image
textureLoader.load(product.imageUrl, (texture) => {
  const geometry = new THREE.PlaneGeometry(w, h);
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.5,
    side: THREE.DoubleSide
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(product.x, product.y, 0);
  mesh.userData.isDragging = false;
  mesh.userData.collisionDataIndex = idx; // store index
  scene.add(mesh);
  productMeshes.push(mesh); // track it
});

    // Load collision mask
    textureLoader.load(product.maskUrl, (maskTexture) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        productCollisionData[idx] = {
          x: product.x,
          y: product.y,
          w: w,
          h: h,
          productName: product.productName,
          pixelData: imageData.data,
          width: canvas.width,
          height: canvas.height,
        };
      };
      img.src = product.maskUrl;
    });
  });

  window.productCollisionData = productCollisionData;

  updateProgressMap(index);
  updateProductInfo(``);
  updateSceneTracker(index);
}

function jumpToScene(index) {
  if (index <= currentSceneIndex) {
    loadScene(index);
  }
}

function updateProductInfo(text) {
  const el = document.getElementById('product-text');
  if (el) el.textContent = text;
}



function animate() {
  requestAnimationFrame(animate);

  if (!ballBody) return;

 const sceneProgress = currentSceneIndex / (sceneConfigs.length - 1); // 0 to 1

  const gravity = 15 + (sceneProgress * 10); // 15 → 25 gravity
  const friction = 0.99 - (sceneProgress * 0.05); // 0.99 → 0.94 friction
  const bounceDamping = 0.7 - (sceneProgress * 0.2); // 0.7 → 0.5 bounce reduction

  ballBody.vy -= gravity * 0.016;
  ballBody.vx *= friction;
  ballBody.vy *= friction;

  ballBody.x += ballBody.vx * 0.016;
  ballBody.y += ballBody.vy * 0.016;


  // Collision detection
  if (window.productCollisionData) {
    window.productCollisionData.forEach((collisionData) => {
      if (collisionData && checkSilhouetteCollision(ballBody.x, ballBody.y, ballBody.radius, collisionData)) {
        const bounced = bounceOffSilhouette(ballBody.x, ballBody.y, ballBody.radius, collisionData, ballBody.vx, ballBody.vy);
        ballBody.vx = bounced.vx;
        ballBody.vy = bounced.vy;
        ballBody.x += ballBody.vx * 0.016;
        ballBody.y += ballBody.vy * 0.016;

         if (collisionData.productName) {
        updateProductInfo(collisionData.productName);
      }
    }
    });
  }


// Ground collision
  if (ballBody.y - ballBody.radius < GROUND_Y) {
    ballBody.y = GROUND_Y + ballBody.radius;
    ballBody.vy *= -bounceDamping; // Use progressive damping instead of fixed 0.7
    ballBody.vx *= 0.95;
  
  // Check if ball has settled (low velocity = resting on ground)
  if (Math.abs(ballBody.vy) < 1 && Math.abs(ballBody.vx) < 1 && !ballTouchedBottom) {
    console.log('Ball has settled! Loading next scene...');
    ballTouchedBottom = true;
    
    // Load next scene after a short delay
    setTimeout(() => {
      if (currentSceneIndex < sceneConfigs.length - 1) {
        loadScene(currentSceneIndex + 1);
      }
    }, 500); // 500ms delay, adjust as needed
  }
}

  ballMesh.position.set(ballBody.x, ballBody.y, 0);
  renderer.render(scene, camera);
}

function checkSilhouetteCollision(ballX, ballY, ballRadius, collisionData) {
  const { x, y, w, h, pixelData, width, height } = collisionData;

  const localX = ballX - x;
  const localY = ballY - y;

  if (Math.abs(localX) > w / 2 || Math.abs(localY) > h / 2) {
    return false;
  }

  const pixelX = Math.floor(((localX + w / 2) / w) * width);
  const pixelY = Math.floor(((h / 2 - localY) / h) * height);

  if (pixelX < 0 || pixelX >= width || pixelY < 0 || pixelY >= height) {
    return false;
  }

  const pixelIndex = (pixelY * width + pixelX) * 4 + 3;
  const alpha = pixelData[pixelIndex];

  return alpha > 128;
}

function bounceOffSilhouette(ballX, ballY, ballRadius, collisionData, vx, vy) {
  const { x, y, w, h, pixelData, width, height } = collisionData;

  let normalX = 0;
  let normalY = 0;

  const samples = 16;
  for (let i = 0; i < samples; i++) {
    const angle = (i / samples) * Math.PI * 2;
    const sampleX = ballX + Math.cos(angle) * ballRadius;
    const sampleY = ballY + Math.sin(angle) * ballRadius;

    const localX = sampleX - x;
    const localY = sampleY - y;

    if (Math.abs(localX) > w / 2 || Math.abs(localY) > h / 2) continue;

    const pixelX = Math.floor(((localX + w / 2) / w) * width);
    const pixelY = Math.floor(((h / 2 - localY) / h) * height);

    if (pixelX < 0 || pixelX >= width || pixelY < 0 || pixelY >= height) continue;

    const pixelIndex = (pixelY * width + pixelX) * 4 + 3;
    const alpha = pixelData[pixelIndex];

    if (alpha > 128) {
      normalX += Math.cos(angle);
      normalY += Math.sin(angle);
    }
  }

  const normLen = Math.sqrt(normalX * normalX + normalY * normalY);
  if (normLen < 0.01) return { vx, vy };

  normalX /= normLen;
  normalY /= normLen;

  const dotProduct = vx * normalX + vy * normalY;

  return {
    vx: (vx - 2 * dotProduct * normalX) * 0.8,
    vy: (vy - 2 * dotProduct * normalY) * 0.8,
  };
}

function handleResize() {
  const container = document.getElementById('canvas-container');
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initScene);

// Raycasting for product selection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let selectedProduct = null;
let productMeshes = []; // track all product meshes

function onMouseDown(event) {
  // Convert mouse position to normalized device coordinates
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
  
  // Check if final scene
  if (currentSceneIndex === sceneConfigs.length - 1) {
    const ballIntersect = raycaster.intersectObject(ballMesh);
    if (ballIntersect.length > 0) {
      selectedProduct = ballMesh; // Reuse the same dragging system
      selectedProduct.userData.isDragging = true;
      return; // Don't check products if ball is selected
    }
  }

  // Raycast to find intersected objects
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(productMeshes);

  if (intersects.length > 0) {
    selectedProduct = intersects[0].object;
    selectedProduct.userData.isDragging = true;
  }
}

function onMouseMove(event) {
  if (!selectedProduct || !selectedProduct.userData.isDragging) return;

  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  // Create a plane at z=0 to raycast onto
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const intersection = new THREE.Vector3();
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, intersection);

  selectedProduct.position.x = intersection.x;
  selectedProduct.position.y = intersection.y;

    if (selectedProduct === ballMesh && isDrawingTraces) {
    drawTrace(intersection.x, intersection.y);
  }

}

function onMouseUp(event) {
  if (selectedProduct) {
    selectedProduct.userData.isDragging = false;
    
    // Update collision data position
    if (window.productCollisionData && selectedProduct.userData.collisionDataIndex !== undefined) {
      const collisionData = window.productCollisionData[selectedProduct.userData.collisionDataIndex];
      if (collisionData) {
        collisionData.x = selectedProduct.position.x;
        collisionData.y = selectedProduct.position.y;
      }
    }
    
    selectedProduct = null;
  }
}

// Start a 2-minute timer
setTimeout(() => {
  console.log("2 minutes elapsed — activating chute experience");
  
  transitionToChute();
  
}, 120000); // 2 minutes

// Create a 2-minute visible countdown timer
let timeLeft = 120; // seconds
const timerDisplay = document.getElementById("countdown-timer");

const countdownInterval = setInterval(() => {
  timeLeft--;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // when timer hits 0 → stop and trigger chute
  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    timerDisplay.style.display = "none"; // hide the timer
    transitionToChute();
  }
}, 1000);

function transitionToChute() {
  console.log('Starting chute transition...');
  
  // Disable physics during transition
  ballBody = null;
  
  // Get references
  const viewportContainer = document.querySelector('.viewport-container');
  const canvasContainer = document.getElementById('canvas-container');
  const sceneTracker = document.querySelector('.scene-tracker');
  
  // Duration and timing
  const duration = 5000; // 5 seconds
  const startTime = Date.now();
  
  // Store initial camera state
  const startCameraPos = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
  
  // Calculate how much to scale the tracker to fill screen
  const trackerRect = sceneTracker.getBoundingClientRect();
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const scaleX = screenWidth / trackerRect.width;
  const scaleY = screenHeight / trackerRect.height;
  const maxScale = Math.max(scaleX, scaleY) * 1.5; // Changed: More reasonable overfill
  
  // Get initial position
  const startLeft = parseFloat(window.getComputedStyle(sceneTracker).left);
  const startTop = parseFloat(window.getComputedStyle(sceneTracker).top);
  
  // Easing function
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  
  // Animation loop
  function animateTransition() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    
    // Animate camera - zoom in dramatically
    camera.position.x = startCameraPos.x * (1 - eased);
    camera.position.y = startCameraPos.y * (1 - eased);
    camera.position.z = startCameraPos.z - (13 * eased);
    
    // Fade products to black
    scene.traverse((child) => {
      if (child.material && child !== ballMesh) {
        if (child.material.opacity !== undefined) {
          child.material.opacity = 1 - eased;
        }
      }
    });
    
    // Fade to black
    canvasContainer.style.filter = `brightness(${1 - eased})`;
    
    // Zoom scene tracker - SIMPLIFIED
    if (sceneTracker) {
      // Set the focal point ONCE at the start (32% from left, 90% from top)
      if (elapsed < 50) { // Only set on first frame
        sceneTracker.style.transformOrigin = '32% 90%';
      }
      
      const scale = 1 + eased * (maxScale - 1);
      
      // Keep it in the same position, just scale from the origin point
      sceneTracker.style.transform = `scale(${scale})`;
      sceneTracker.style.opacity = '1';
    }
    
    // Transform viewport for depth
    const viewportScale = 1 + eased * 0.5;
    viewportContainer.style.transform = `scale(${viewportScale})`;
    
    renderer.render(scene, camera);
    
     if (progress < 1) {
    requestAnimationFrame(animateTransition);
  } else {
    // Zoom complete - NOW fade to black before starting chute
    console.log('Zoom complete - fading to black...');
    
    // Create black overlay
    const blackOverlay = document.createElement('div');
    blackOverlay.style.position = 'fixed';
    blackOverlay.style.top = '0';
    blackOverlay.style.left = '0';
    blackOverlay.style.width = '100vw';
    blackOverlay.style.height = '100vh';
    blackOverlay.style.backgroundColor = 'black';
    blackOverlay.style.opacity = '0';
    blackOverlay.style.transition = 'opacity 1s ease'; // 1 second fade
    blackOverlay.style.zIndex = '10000';
    document.body.appendChild(blackOverlay);
    
    // Trigger fade
    setTimeout(() => {
      blackOverlay.style.opacity = '1';
    }, 10);
    
    // After fade completes, start chute
    setTimeout(() => {
      console.log('Fade complete - starting chute');
      
      const main = document.querySelector("#main-container");
      main.style.display = "none";
      
      const chuteScene = document.getElementById("chute-scene");
      chuteScene.style.display = "block";
      
      // Remove overlay so chute is visible
      blackOverlay.remove();
      
      startChuteExperience();
    }, 1000); // Wait for 1s fade to complete
  }
}
  
  animateTransition();
}


