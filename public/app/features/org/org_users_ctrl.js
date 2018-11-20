/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../../core/core_module"],function(a){var b,c;return{setters:[function(a){b=a}],execute:function(){c=function(){function a(a,b,c){this.$scope=a,this.$http=b,this.backendSrv=c,this.user={loginOrEmail:"",role:"Viewer"},this.get(),this.editor={index:0}}return a.$inject=["$scope","$http","backendSrv"],a.prototype.get=function(){var a=this;this.backendSrv.get("/api/org/users").then(function(b){a.users=b}),this.backendSrv.get("/api/org/invites").then(function(b){a.pendingInvites=b})},a.prototype.updateOrgUser=function(a){this.backendSrv.patch("/api/org/users/"+a.userId,a)},a.prototype.removeUser=function(a){var b=this;this.$scope.appEvent("confirm-modal",{title:"Delete",text:"Are you sure you want to delete user "+a.login+"?",yesText:"Delete",icon:"fa-warning",onConfirm:function(){b.removeUserConfirmed(a)}})},a.prototype.removeUserConfirmed=function(a){var b=this;this.backendSrv["delete"]("/api/org/users/"+a.userId).then(function(){b.get()})},a.prototype.revokeInvite=function(a,b){var c=this;b.stopPropagation(),this.backendSrv.patch("/api/org/invites/"+a.code+"/revoke").then(function(){c.get()})},a.prototype.copyInviteToClipboard=function(a){a.stopPropagation()},a.prototype.openInviteModal=function(){var a=this.$scope.$new();a.invitesSent=function(){this.get()},this.$scope.appEvent("show-modal",{src:"public/app/features/org/partials/invite.html",modalClass:"invite-modal",scope:a})},a}(),a("OrgUsersCtrl",c),b["default"].controller("OrgUsersCtrl",c)}}});