
if (typeof gdjs.evtsExt__ParticleFunctions__DecayLeptonic !== "undefined") {
  gdjs.evtsExt__ParticleFunctions__DecayLeptonic.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ParticleFunctions__DecayLeptonic = {};
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects1= [];
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects2= [];
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects1= [];
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects2= [];
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects1= [];
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects2= [];


gdjs.evtsExt__ParticleFunctions__DecayLeptonic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayLeptonic_9546GDDaughter1Objects1Objects = Hashtable.newFrom({"Daughter1": gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects1});
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayLeptonic_9546GDDaughter2Objects2Objects = Hashtable.newFrom({"Daughter2": gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects2});
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.asyncCallback21868628 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Mother"), gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects2);

gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ParticleFunctions__DecayLeptonic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayLeptonic_9546GDDaughter2Objects2Objects, (( gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects2[0].getPointX("")) - 10 * eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), (( gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects2[0].getPointY("")), "Zoo Layer");
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects2.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects2[i].resetTimer("LifeTime");
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects2.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects2[i].setZOrder((( gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects2[0].getZOrder()));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects2.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).applyPolarImpulse(270 - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber() * gdjs.randomInRange(70, 80), 0.003, (gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getMassCenterX()), (gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getMassCenterY()));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects1) asyncObjectsList.addObject("Mother", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.evtsExt__ParticleFunctions__DecayLeptonic.asyncCallback21868628(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__ParticleFunctions__DecayLeptonic.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(gdjs.evtTools.common.sign(gdjs.randomFloatInRange(-(1), 1)));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Mother"), gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects1);
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ParticleFunctions__DecayLeptonic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayLeptonic_9546GDDaughter1Objects1Objects, (( gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects1[0].getPointX("")) + 10 * eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), (( gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects1[0].getPointY("")), "Zoo Layer");
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects1[i].resetTimer("LifeTime");
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects1[i].setZOrder((( gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects1[0].getZOrder()));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics1")).applyPolarImpulse(270 + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber() * gdjs.randomInRange(70, 80), 0.003, (gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics1")).getMassCenterX()), (gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics1")).getMassCenterY()));
}
}
{ //Subevents
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ParticleFunctions__DecayLeptonic.func = function(runtimeScene, Mother, Daughter1, Physics1, Daughter2, Physics2, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
"Mother": Mother
, "Daughter1": Daughter1
, "Daughter2": Daughter2
},
  _objectArraysMap: {
"Mother": gdjs.objectsListsToArray(Mother)
, "Daughter1": gdjs.objectsListsToArray(Daughter1)
, "Daughter2": gdjs.objectsListsToArray(Daughter2)
},
  _behaviorNamesMap: {
"Physics1": Physics1
, "Physics2": Physics2
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects2.length = 0;

gdjs.evtsExt__ParticleFunctions__DecayLeptonic.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDMotherObjects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter1Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayLeptonic.GDDaughter2Objects2.length = 0;


return eventsFunctionContext.task
}

gdjs.evtsExt__ParticleFunctions__DecayLeptonic.registeredGdjsCallbacks = [];