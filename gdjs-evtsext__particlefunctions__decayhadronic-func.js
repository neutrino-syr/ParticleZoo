
if (typeof gdjs.evtsExt__ParticleFunctions__DecayHadronic !== "undefined") {
  gdjs.evtsExt__ParticleFunctions__DecayHadronic.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ParticleFunctions__DecayHadronic = {};
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1= [];
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2= [];
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects1= [];
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects2= [];
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects1= [];
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects2= [];


gdjs.evtsExt__ParticleFunctions__DecayHadronic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayHadronic_9546GDDaughter1Objects1Objects = Hashtable.newFrom({"Daughter1": gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects1});
gdjs.evtsExt__ParticleFunctions__DecayHadronic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayHadronic_9546GDDaughter2Objects2Objects = Hashtable.newFrom({"Daughter2": gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects2});
gdjs.evtsExt__ParticleFunctions__DecayHadronic.asyncCallback21857916 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Mother"), gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2);

gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ParticleFunctions__DecayHadronic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayHadronic_9546GDDaughter2Objects2Objects, (( gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2[0].getPointX("")), (( gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2[0].getPointY("")), "Zoo Layer");
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects2.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects2[i].resetTimer("LifeTime");
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects2.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects2[i].setZOrder((( gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2[0].getZOrder()));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects2.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween2")).addObjectScaleTween3("Scale", 0.8 * (( gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScale()), "linear", 0.1, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects2.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Move2")).moveTo(runtimeScene, (( gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2[0].getPointX("")) + 65, (( gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ParticleFunctions__DecayHadronic.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1) asyncObjectsList.addObject("Mother", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.evtsExt__ParticleFunctions__DecayHadronic.asyncCallback21857916(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__ParticleFunctions__DecayHadronic.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Mother"), gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1);
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ParticleFunctions__DecayHadronic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayHadronic_9546GDDaughter1Objects1Objects, (( gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1[0].getPointX("")), (( gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1[0].getPointY("")), "Zoo Layer");
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects1[i].resetTimer("LifeTime");
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects1[i].setZOrder((( gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1[0].getZOrder()));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween1")).addObjectScaleTween3("Scale", 0.8 * (( gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScale()), "linear", 0.1, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Move4")).moveTo(runtimeScene, (( gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1[0].getPointX("")) - 65, (( gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1[0].getPointY("")));
}
}
{ //Subevents
gdjs.evtsExt__ParticleFunctions__DecayHadronic.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ParticleFunctions__DecayHadronic.func = function(runtimeScene, Mother, Daughter1, Tween1, Move4, Daughter2, Tween2, Move2, parentEventsFunctionContext) {
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
"Tween1": Tween1
, "Move4": Move4
, "Tween2": Tween2
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects2.length = 0;

gdjs.evtsExt__ParticleFunctions__DecayHadronic.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDMotherObjects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter1Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayHadronic.GDDaughter2Objects2.length = 0;


return eventsFunctionContext.task
}

gdjs.evtsExt__ParticleFunctions__DecayHadronic.registeredGdjsCallbacks = [];