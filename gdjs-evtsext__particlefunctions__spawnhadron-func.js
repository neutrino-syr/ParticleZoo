
if (typeof gdjs.evtsExt__ParticleFunctions__SpawnHadron !== "undefined") {
  gdjs.evtsExt__ParticleFunctions__SpawnHadron.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ParticleFunctions__SpawnHadron = {};
gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1= [];
gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects2= [];
gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects1= [];
gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects2= [];


gdjs.evtsExt__ParticleFunctions__SpawnHadron.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595SpawnHadron_9546GDHadronObjects1Objects = Hashtable.newFrom({"Hadron": gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1});
gdjs.evtsExt__ParticleFunctions__SpawnHadron.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ParticleFunctions__SpawnHadron.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595SpawnHadron_9546GDHadronObjects1Objects, eventsFunctionContext.getArgument("X"), eventsFunctionContext.getArgument("Y") - 25, "Zoo Layer");
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1[i].resetTimer("LifeTime");
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1[i].returnVariable(gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1[i].getVariables().get("KShortLong")).setNumber(gdjs.randomFloatInRange(0, 100));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Hadron"), gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Hadrons"), gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects1);
{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Move")).moveTo(runtimeScene, eventsFunctionContext.getArgument("X") + gdjs.randomInRange(-(100), 50), Math.max(eventsFunctionContext.getArgument("Y") - 150, (gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1[i].getPointY("")) - gdjs.randomInRange(0, 50)));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween2")).addObjectScaleTween3("Scale", 0.8 * (gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScale()), "linear", 0.1, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Move2")).moveTo(runtimeScene, Math.max(eventsFunctionContext.getArgument("X") - 50, (gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects1[i].getX()) + gdjs.randomInRange(-(150), 300)), Math.max(eventsFunctionContext.getArgument("Y") - 150, (gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects1[i].getY()) - gdjs.randomInRange(25, 75)));
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__ParticleFunctions__SpawnHadron.func = function(runtimeScene, Hadron, X, Y, Tween, Move, Hadrons, Tween2, Scale, Move2, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
"Hadron": Hadron
, "Hadrons": Hadrons
},
  _objectArraysMap: {
"Hadron": gdjs.objectsListsToArray(Hadron)
, "Hadrons": gdjs.objectsListsToArray(Hadrons)
},
  _behaviorNamesMap: {
"Tween": Tween
, "Move": Move
, "Tween2": Tween2
, "Scale": Scale
, "Move2": Move2
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
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects2.length = 0;
gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects2.length = 0;

gdjs.evtsExt__ParticleFunctions__SpawnHadron.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronObjects2.length = 0;
gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__SpawnHadron.GDHadronsObjects2.length = 0;


return eventsFunctionContext.task
}

gdjs.evtsExt__ParticleFunctions__SpawnHadron.registeredGdjsCallbacks = [];