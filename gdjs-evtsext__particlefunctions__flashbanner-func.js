
if (typeof gdjs.evtsExt__ParticleFunctions__FlashBanner !== "undefined") {
  gdjs.evtsExt__ParticleFunctions__FlashBanner.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ParticleFunctions__FlashBanner = {};
gdjs.evtsExt__ParticleFunctions__FlashBanner.GDBannerObjects1= [];
gdjs.evtsExt__ParticleFunctions__FlashBanner.GDBannerObjects2= [];


gdjs.evtsExt__ParticleFunctions__FlashBanner.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595FlashBanner_9546GDBannerObjects1Objects = Hashtable.newFrom({"Banner": gdjs.evtsExt__ParticleFunctions__FlashBanner.GDBannerObjects1});
gdjs.evtsExt__ParticleFunctions__FlashBanner.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__ParticleFunctions__FlashBanner.GDBannerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ParticleFunctions__FlashBanner.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595FlashBanner_9546GDBannerObjects1Objects, eventsFunctionContext.getArgument("X"), eventsFunctionContext.getArgument("Y"), "Base Layer");
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__FlashBanner.GDBannerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__FlashBanner.GDBannerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("Name"));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__FlashBanner.GDBannerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__FlashBanner.GDBannerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween2(gdjs.evtTools.common.toString((gdjs.evtsExt__ParticleFunctions__FlashBanner.GDBannerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).getOpacity())), 0, "linear", 1.5, true);
}
}{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__ParticleFunctions__FlashBanner.func = function(runtimeScene, Banner, Name, X, Y, Tween, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
"Banner": Banner
},
  _objectArraysMap: {
"Banner": gdjs.objectsListsToArray(Banner)
},
  _behaviorNamesMap: {
"Tween": Tween
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ParticleFunctions"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ParticleFunctions"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Name") return Name;
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ParticleFunctions__FlashBanner.GDBannerObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__FlashBanner.GDBannerObjects2.length = 0;

gdjs.evtsExt__ParticleFunctions__FlashBanner.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ParticleFunctions__FlashBanner.GDBannerObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__FlashBanner.GDBannerObjects2.length = 0;


return eventsFunctionContext.task
}

gdjs.evtsExt__ParticleFunctions__FlashBanner.registeredGdjsCallbacks = [];