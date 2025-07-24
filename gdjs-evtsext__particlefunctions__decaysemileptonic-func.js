
if (typeof gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic !== "undefined") {
  gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic = {};
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1= [];
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects2= [];
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects3= [];
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects1= [];
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects2= [];
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects3= [];
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects1= [];
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects2= [];
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects3= [];
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects1= [];
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects2= [];
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects3= [];


gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecaySemiLeptonic_9546GDDaughter1Objects1Objects = Hashtable.newFrom({"Daughter1": gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects1});
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecaySemiLeptonic_9546GDDaughter2Objects2Objects = Hashtable.newFrom({"Daughter2": gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects2});
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecaySemiLeptonic_9546GDDaughter3Objects3Objects = Hashtable.newFrom({"Daughter3": gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects3});
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.asyncCallback21874612 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Daughter2"), gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("Mother"), gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects3);

gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecaySemiLeptonic_9546GDDaughter3Objects3Objects, (( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects3[0].getPointX("")) - 10 * eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), (( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects3[0].getPointY("")), "Zoo Layer");
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects3.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects3[i].resetTimer("LifeTime");
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects3.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects3[i].setZOrder((( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects3[0].getZOrder()));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects3.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).applyPolarImpulse(270 - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber() * gdjs.randomInRange(70, 80), 0.003, (( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects3.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getMassCenterX()), (( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects3.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getMassCenterY()));
}
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects2) asyncObjectsList.addObject("Daughter2", obj);
for (const obj of gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects2) asyncObjectsList.addObject("Mother", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.asyncCallback21874612(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.asyncCallback21873700 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(eventsFunctionContext.getObjects("Daughter1"), gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Mother"), gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects2);
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecaySemiLeptonic_9546GDDaughter2Objects2Objects, (( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects2[0].getPointX("")) + 10 * eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), (( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects2[0].getPointY("")), "Zoo Layer");
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects2.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects2[i].resetTimer("LifeTime");
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects2.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects2[i].setZOrder((( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects2[0].getZOrder()));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects2.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).applyPolarImpulse(270 + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber() * gdjs.randomInRange(70, 80), 0.003, (gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getMassCenterX()), (gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics2")).getMassCenterY()));
}
}
{ //Subevents
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.asyncCallback21873700(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(gdjs.evtTools.common.sign(gdjs.randomFloatInRange(-(1), 1)));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Mother"), gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1);
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.mapOfGDgdjs_9546evtsExt_9595_9595ParticleFunctions_9595_9595DecaySemiLeptonic_9546GDDaughter1Objects1Objects, (( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1[0].getPointX("")), (( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1[0].getPointY("")), "Zoo Layer");
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects1[i].resetTimer("LifeTime");
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects1[i].setZOrder((( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1[0].getZOrder()));
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween1")).addObjectScaleTween3("Scale", 0.8 * (( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScale()), "linear", 0.1, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Move1")).moveTo(runtimeScene, (( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1[0].getPointX("")) - 65, (( gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1[0].getPointY("")));
}
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Mother"), gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1);
{for(var i = 0, len = gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.func = function(runtimeScene, Mother, Daughter1, Tween1, Move1, Daughter2, Physics2, Daughter3, Physics3, parentEventsFunctionContext) {
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
, "Move1": Move1
, "Physics2": Physics2
, "Physics3": Physics3
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

gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects3.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects3.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects3.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects3.length = 0;

gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDMotherObjects3.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter1Objects3.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter2Objects3.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects1.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects2.length = 0;
gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.GDDaughter3Objects3.length = 0;


return eventsFunctionContext.task
}

gdjs.evtsExt__ParticleFunctions__DecaySemiLeptonic.registeredGdjsCallbacks = [];