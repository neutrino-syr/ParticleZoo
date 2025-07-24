
if (typeof gdjs.evtsExt__ParticleFunctions__DecayThreeBody !== "undefined") {
  gdjs.evtsExt__ParticleFunctions__DecayThreeBody.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ParticleFunctions__DecayThreeBody = {};
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1= [];
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects2= [];
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects1= [];
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects2= [];
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects1= [];
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects2= [];
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects1= [];
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects2= [];


gdjs.evtsExt__ParticleFunctions__DecayThreeBody.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayThreeBody_9546GDDaughter1Objects1Objects = Hashtable.newFrom({"Daughter1": gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects1});
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayThreeBody_9546GDDaughter2Objects1Objects = Hashtable.newFrom({"Daughter2": gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects1});
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayThreeBody_9546GDDaughter3Objects1Objects = Hashtable.newFrom({"Daughter3": gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects1});
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Mother"), gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1);
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects1.length = 0;

gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects1.length = 0;

gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ParticleFunctions__DecayThreeBody.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayThreeBody_9546GDDaughter1Objects1Objects, (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getPointX("")), (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getPointY("")), "Zoo Layer");
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects1[i].resetTimer("LifeTime");
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects1[i].setZOrder((( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getZOrder()));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween1")).addObjectScaleTween3("Scale", 0.8 * (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScale()), "linear", 0.1, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Move4")).moveTo(runtimeScene, (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getPointX("")) - 65, (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getPointY("")));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ParticleFunctions__DecayThreeBody.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayThreeBody_9546GDDaughter2Objects1Objects, (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getPointX("")), (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getPointY("")), "Zoo Layer");
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects1[i].resetTimer("LifeTime");
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects1[i].setZOrder((( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getZOrder()));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween2")).addObjectScaleTween3("Scale", 0.8 * (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScale()), "linear", 0.1, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Move2")).moveTo(runtimeScene, (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getPointX("")) + 65, (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getPointY("")));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ParticleFunctions__DecayThreeBody.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecayThreeBody_9546GDDaughter3Objects1Objects, (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getPointX("")), (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getPointY("")), "Zoo Layer");
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects1[i].resetTimer("LifeTime");
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects1[i].setZOrder((( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getZOrder()));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween3")).addObjectScaleTween3("Scale", 0.8 * (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScale()), "linear", 0.1, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Move3")).moveTo(runtimeScene, (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getPointX("")), (( gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[0].getPointY("")) - 10);
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__ParticleFunctions__DecayThreeBody.func = function(runtimeScene, Mother, Daughter1, Tween1, Move4, Daughter2, Tween2, Move2, Daughter3, Tween3, Move3, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
"Mother": Mother
, "Daughter1": Daughter1
, "Daughter2": Daughter2
, "Daughter3": Daughter3
},
  _objectArraysMap: {
"Mother": gdjs.objectsListsToArray(Mother)
, "Daughter1": gdjs.objectsListsToArray(Daughter1)
, "Daughter2": gdjs.objectsListsToArray(Daughter2)
, "Daughter3": gdjs.objectsListsToArray(Daughter3)
},
  _behaviorNamesMap: {
"Tween1": Tween1
, "Move4": Move4
, "Tween2": Tween2
, "Move2": Move2
, "Tween3": Tween3
, "Move3": Move3
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

gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects2.length = 0;

gdjs.evtsExt__ParticleFunctions__DecayThreeBody.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDMotherObjects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter1Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter2Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecayThreeBody.GDDaughter3Objects2.length = 0;


return eventsFunctionContext.task
}

gdjs.evtsExt__ParticleFunctions__DecayThreeBody.registeredGdjsCallbacks = [];