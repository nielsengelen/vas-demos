function loadInfo(value) {
	switch (value) {
		/* High Speed Recovery */
		case 'ivm':
			$('#rightcolumn1').width('100%');
			$('#rightcolumn1').html('<iframe src="lab/ivm/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'iflrl':
			$('#rightcolumn1').width('100%');
			$('#rightcolumn1').html('<iframe src="lab/flr_linux/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'iflrw':
			$('#rightcolumn1').width('100%');
			$('#rightcolumn1').html('<iframe src="lab/flr_windows/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'vead':
			$('#rightcolumn1').width('100%');
			$('#rightcolumn1').html('<iframe src="lab/vead/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'vex':
			$('#rightcolumn1').width('100%');
			$('#rightcolumn1').html('<iframe src="lab/vex/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'vesp':
			$('#rightcolumn1').width('100%');
			$('#rightcolumn1').html('<iframe src="lab/vesp/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'vesql':
			$('#rightcolumn1').width('100%');
			$('#rightcolumn1').html('<iframe src="lab/vesql/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'veora':
			$('#rightcolumn1').width('100%');
			$('#rightcolumn1').html('<iframe src="lab/veora/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
			
		/* Data Loss Avoidance */
		case 'bj':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/backupjob/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'bcj':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/bcj/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'rj':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/replicationjob/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'vcc':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/cc_enduser/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'bfssemc':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/boss_emc/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'bfsshpe':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/boss_hpe/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'bfssna':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/boss_netapp/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'emcdd':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/datadomain/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'exagrid':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/exagrid/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'storeonce':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/storeonce/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'fp':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/failoverplan/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'bioc':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/bioc/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'etee':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/backupjob/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'ntt':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/tape/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'tapegfs':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/tapegfs/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'tapeglobal':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/tapeglobal/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'sobr':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/sobr/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'pvmbc':
			$('#rightcolumn2').width('100%');
			$('#rightcolumn2').html('<iframe src="lab/pervmchain/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
			
		/* Verified Protection */	
		case 'srb':
			$('#rightcolumn3').width('100%');
			$('#rightcolumn3').html('<iframe src="lab/surebackup/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'srr':
			$('#rightcolumn3').width('100%');
			$('#rightcolumn3').html('<iframe src="lab/surereplica/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;		
		
		/* Leveraged Data */
		case 'vlb':
			$('#rightcolumn4').width('100%');
			$('#rightcolumn4').html('<iframe src="lab/virtuallab/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'appss':
			$('#rightcolumn4').width('100%');
			$('#rightcolumn4').html('<iframe src="lab/applicationgroup-ss/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;
		case 'appb':
			$('#rightcolumn4').width('100%');
			$('#rightcolumn4').html('<iframe src="lab/applicationgroup-backup/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;	
		case 'appr':
			$('#rightcolumn4').width('100%');
			$('#rightcolumn4').html('<iframe src="lab/applicationgroup-replicas/tutorial.html?autofit=true" width="100%" height="100%"></iframe>');
			break;	
		
		/* Complete Visibility */
		case 'vone':
			$('#rightcolumn5').html('<iframe src="vone.html" width="100%" height="100%"></iframe>');
			break;
		case 'vmp':
			$('#rightcolumn5').html('<iframe src="vmp.html" width="100%" height="100%"></iframe>');
			break;	
		
		default:
			alert('Video not found.');
			reset();
	}
}

function reset() {
	$('#rightcolumn1').html('<div class="video"></div><div class="fvideo">Select a feature you want to see.</div>');
	$('#rightcolumn2').html('<div class="video"></div><div class="fvideo">Select a feature you want to see.</div>');
	$('#rightcolumn3').html('<div class="video"></div><div class="fvideo">Select a feature you want to see.</div>');
	$('#rightcolumn4').html('<div class="video"></div><div class="fvideo">Select a feature you want to see.</div>');
	$('#rightcolumn5').html('<div class="video"></div><div class="fvideo">Select a feature you want to see.</div>');
	
	$('#rightcolumn1').width('85%');
	$('#leftcolumn1').html('<img src="images/hsr.png" class="menuimg" /><span class="menutitle"><br />High Speed Recovery</span><br /><ul class="menuitems"><li><a href="javascript:loadInfo:loadInfo(\'ivm\')">Instant VM Recovery</a></li><li><a href="javascript:loadInfo:loadInfo(\'iflrl\')">Instant File-level Recovery<br />(Linux)</a></li><li><a href="javascript:loadInfo:loadInfo(\'iflrw\')">Instant File-level Recovery<br />(Windows)</a></li><br /><span class="menuheader">Veeam Explorers:</span><br /><li><a href="javascript:loadInfo:loadInfo(\'vead\')">Microsoft Active Directory <span class="v8feature">(v8)</span></a></li><li><a href="javascript:loadInfo:loadInfo(\'vex\')">Microsoft Exchange</a></li><li><a href="javascript:loadInfo:loadInfo(\'vesp\')">Microsoft SharePoint</a></li><li><a href="javascript:loadInfo:loadInfo(\'vesql\')">Microsoft SQL Server <span class="v8feature">(v8)</span></a></li><br /><li><a href="javascript:loadInfo(\'veora\')">Oracle <span class="v8feature">(v9)</span></a></li></ul>');
	$('#rightcolumn2').width('85%');
	$('#leftcolumn2').html('<img src="images/dla.png" class="menuimg" /><span class="menutitle"><br />Data Loss Avoidance</span><br /><ul class="menuitems"><li><a href="javascript:loadInfo(\'bj\')">Backup Job</a></li><li><a href="javascript:loadInfo(\'bcj\')">Backup Copy Job<br />(WAN acceleration)</a></li><li><a href="javascript:loadInfo(\'rj\')">Replication Job</a></li><br /><li><a href="javascript:loadInfo(\'bioc\')">Backup I/O Control <span class="v8feature">(v8)</a></span></li><li><a href="javascript:loadInfo(\'fp\')">Failover Plan <span class="v8feature">(v8)</a></span></li><li><a href="javascript:loadInfo(\'vcc\')">Veeam Cloud Connect <span class="v8feature">(v9)</span></a></li><br /><li><a href="javascript:loadInfo(\'sobr\')">Scale-Out Backup Repository <span class="v8feature">(v9)</a></span></li><li><a href="javascript:loadInfo(\'pvmbc\')">Per-VM Backup Chain <span class="v8feature">(v9)</a></span></li><br /><span class="menuheader">Backup from Storage Snapshots:</span><br /><li><a href="javascript:loadInfo(\'bfssemc\')">EMC VNX(e)</a> <span class="v8feature">(v9)</span></li><li><a href="javascript:loadInfo(\'bfsshpe\')">HPE StoreVirtual/StoreServ</a></li><li><a href="javascript:loadInfo(\'bfssna\')">NetApp FAS</a> <span class="v8feature">(v8)</span></li><br /><span class="menuheader">Deduplicating storage:</span><br /><li><a href="javascript:loadInfo(\'emcdd\')">EMC Data Domain Boost <span class="v8feature">(v8)</span></a></li><li><a href="javascript:loadInfo(\'exagrid\')">Exagrid <span class="v8feature">(v8)</span></a></li><li><a href="javascript:loadInfo(\'storeonce\')">HPE StoreOnce Catalyst <span class="v8feature">(v9)</span></a></li><br /><span class="menuheader">Native Tape Support:</span><br /><li><a href="javascript:loadInfo(\'ntt\')">Backup to Tape</a></li><li><a href="javascript:loadInfo(\'tapegfs\')">GFS media pool <span class="v8feature">(v9)</span></a></li><li><a href="javascript:loadInfo(\'tapeglobal\')">Global media pool <span class="v8feature">(v9)</span></a></li></ul>');
	$('#rightcolumn3').width('85%');
	$('#leftcolumn3').html('<img src="images/vp.png" class="menuimg" /><span class="menutitle"><br />Verified Recoverability</span><br /><ul class="menuitems"><li><a href="javascript:loadInfo:loadInfo(\'srb\')">SureBackup</a></li><li><a href="javascript:loadInfo:loadInfo(\'srr\')">SureReplica</a></li></ul>');
	$('#rightcolumn4').width('85%');
	$('#leftcolumn4').html('<img src="images/ld.png" class="menuimg" /><span class="menutitle"><br />Leveraged Data</span><br /><ul class="menuitems"><li><a href="javascript:loadInfo(\'vlb\')">Virtual Lab</a></li><br /><span class="menuheader">On-Demand Sandbox:</span><br /><li><a href="javascript:loadInfo(\'appb\')">Application Groups (Backups)</a></li><li><a href="javascript:loadInfo(\'appr\')">Application Groups (Replicas)</a></li><li><a href="javascript:loadInfo(\'appss\')">Application Groups (Storage Snapshot) <span class="v8feature">(v9)</span></a></a></li></ul>');
	$('#rightcolumn5').width('85%');
	$('#leftcolumn5').html('<img src="images/cv.png" class="menuimg" /><span class="menutitle"><br />Complete Visibility</span><br /><ul class="menuitems"><li><a href="javascript:loadInfo:loadInfo(\'vone\')">Veeam One</a></li><li><a href="javascript:loadInfo:loadInfo(\'vmp\')">Veeam Mangement Pack</a></li></ul>');
}

function resetMain() {
	$('#rightcolumn1', window.parent.document).width('85%');
	$('#leftcolumn1', window.parent.document).html('<img src="images/hsr.png" class="menuimg" /><span class="menutitle"><br />High Speed Recovery</span><br /><ul class="menuitems"><li><a href="javascript:loadInfo:loadInfo(\'ivm\')">Instant VM Recovery</a></li><li><a href="javascript:loadInfo:loadInfo(\'iflrl\')">Instant File-level Recovery<br />(Linux)</a></li><li><a href="javascript:loadInfo:loadInfo(\'iflrw\')">Instant File-level Recovery<br />(Windows)</a></li><br /><span class="menuheader">Veeam Explorers:</span><br /><li><a href="javascript:loadInfo:loadInfo(\'vead\')">Microsoft Active Directory <span class="v8feature">(v8)</span></a></li><li><a href="javascript:loadInfo:loadInfo(\'vex\')">Microsoft Exchange</a></li><li><a href="javascript:loadInfo:loadInfo(\'vesp\')">Microsoft SharePoint</a></li><li><a href="javascript:loadInfo:loadInfo(\'vesql\')">Microsoft SQL Server <span class="v8feature">(v8)</span></a></li><br /><li><a href="javascript:loadInfo(\'veora\')">Oracle <span class="v8feature">(v9)</span></a></li></ul>');

	$('#rightcolumn2', window.parent.document).width('85%');
	$('#leftcolumn2', window.parent.document).html('<img src="images/dla.png" class="menuimg" /><span class="menutitle"><br />Data Loss Avoidance</span><br /><ul class="menuitems"><li><a href="javascript:loadInfo(\'bj\')">Backup Job</a></li><li><a href="javascript:loadInfo(\'bcj\')">Backup Copy Job<br />(WAN acceleration)</a></li><li><a href="javascript:loadInfo(\'rj\')">Replication Job</a></li><br /><li><a href="javascript:loadInfo(\'bioc\')">Backup I/O Control <span class="v8feature">(v8)</a></span></li><li><a href="javascript:loadInfo(\'etee\')">End-to-End Encryption <span class="v8feature">(v8)</a></span></li><li><a href="javascript:loadInfo(\'fp\')">Failover Plan <span class="v8feature">(v8)</a></span></li><li><a href="javascript:loadInfo(\'vcc\')">Veeam Cloud Connect <span class="v8feature">(v8)</span></a></li><br /><li><a href="javascript:loadInfo(\'sobr\')">Scale-Out Backup Repository <span class="v8feature">(v9)</a></span></li><li><a href="javascript:loadInfo(\'pvmbc\')">Per-VM Backup Chain <span class="v8feature">(v9)</a></span></li><br /><span class="menuheader">Backup from Storage Snapshots:</span><br /><li><a href="javascript:loadInfo(\'bfssemc\')">EMC VNX(e)</a> <span class="v8feature">(v9)</span></li><li><a href="javascript:loadInfo(\'bfsshp\')">HP StoreVirtual/StoreServ</a></li><li><a href="javascript:loadInfo(\'bfssna\')">NetApp FAS</a> <span class="v8feature">(v8)</span></li><br /><span class="menuheader">Deduplicating storage:</span><br /><li><a href="javascript:loadInfo(\'emcdd\')">EMC Data Domain Boost <span class="v8feature">(v8)</span></a></li><li><a href="javascript:loadInfo(\'exagrid\')">Exagrid <span class="v8feature">(v8)</span></a></li><li><a href="javascript:loadInfo(\'hpstoreonce\')">HP StoreOnce Catalyst <span class="v8feature">(v9)</span></a></li><br /><span class="menuheader">Native Tape Support:</span><br /><li><a href="javascript:loadInfo(\'ntt\')">Backup to Tape</a></li><li><a href="javascript:loadInfo(\'tapegfs\')">GFS media pool <span class="v8feature">(v9)</span></a></li><li><a href="javascript:loadInfo(\'tapeglobal\')">Global media pool <span class="v8feature">(v9)</span></a></li></ul>');

	$('#rightcolumn3', window.parent.document).width('85%');
	$('#leftcolumn3', window.parent.document).html('<img src="images/vp.png" class="menuimg" /><span class="menutitle"><br />Verified Protection</span><br /><ul class="menuitems"><li><a href="javascript:loadInfo(\'srb\')">SureBackup</a></li><li><a href="javascript:loadInfo(\'srr\')">SureReplica</a></li></ul>');

	$('#rightcolumn4', window.parent.document).width('85%');
	$('#leftcolumn4', window.parent.document).html('<img src="images/ld.png" class="menuimg" /><span class="menutitle"><br />Leveraged Data</span><br /><ul class="menuitems"><li><a href="javascript:loadInfo(\'appb\')">Application Groups (Backups)</a></li><li><a href="javascript:loadInfo(\'appr\')">Application Groups (Replicas)</a></li><br /><span class="menuheader">On-Demand Sandbox:</span><br /><li><a href="javascript:loadInfo(\'vlb\')">From Backups</a></li><li><a href="javascript:loadInfo(\'vlbss\')">From Storage Snapshots <span class="v8feature">(v9)</span></a></li></ul>');

	$('#rightcolumn5', window.parent.document).width('85%');
	$('#leftcolumn5', window.parent.document).html('<img src="images/cv.png" class="menuimg" /><span class="menutitle"><br />Complete Visibility</span><br /><ul class="menuitems"><li><a href="javascript:loadInfo(\'vone\')">Veeam One</a></li><li><a href="javascript:loadInfo(\'vmp\')">Veeam Mangement Pack</a></li></ul>');

	$('#rightcolumn1', window.parent.document).html('<div class="video"></div><div class="fvideo">Select a feature you want to see.</div>');
	$('#rightcolumn2', window.parent.document).html('<div class="video"></div><div class="fvideo">Select a feature you want to see.</div>');
	$('#rightcolumn3', window.parent.document).html('<div class="video"></div><div class="fvideo">Select a feature you want to see.</div>');
	$('#rightcolumn4', window.parent.document).html('<div class="video"></div><div class="fvideo">Select a feature you want to see.</div>');
	$('#rightcolumn5', window.parent.document).html('<div class="video"></div><div class="fvideo">Select a feature you want to see.</div>');
	
	reset();
}