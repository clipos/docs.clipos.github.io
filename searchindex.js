Search.setIndex({docnames:["clipos/architecture","clipos/boot_integrity","clipos/development","clipos/kernel","clipos/roadmap","clipos/security","index","toolkit/build","toolkit/build-steps","toolkit/contribute","toolkit/cosmk-api","toolkit/derive","toolkit/setup","toolkit/source-tree"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["clipos/architecture.rst","clipos/boot_integrity.rst","clipos/development.rst","clipos/kernel.rst","clipos/roadmap.rst","clipos/security.rst","index.rst","toolkit/build.rst","toolkit/build-steps.rst","toolkit/contribute.rst","toolkit/cosmk-api.rst","toolkit/derive.rst","toolkit/setup.rst","toolkit/source-tree.rst"],objects:{"clipostoolkit.cosmk":{__main__:[10,0,0,"-"],commons:[10,0,0,"-"],completion:[10,0,0,"-"],container:[10,0,0,"-"],exceptions:[10,0,0,"-"],features:[10,0,0,"-"],fs:[10,0,0,"-"],healthcheck:[10,0,0,"-"],instrumentation:[10,0,0,"-"],log:[10,0,0,"-"],mount:[10,0,0,"-"],privileges:[10,0,0,"-"],product:[10,0,0,"-"],recipe:[10,0,0,"-"],sdk:[10,0,0,"-"],sourcetree:[10,0,0,"-"],virt:[10,0,0,"-"]},"clipostoolkit.cosmk.__main__":{main:[10,1,1,""],sudo_ourselves:[10,1,1,""]},"clipostoolkit.cosmk.commons":{is_tty_attached:[10,1,1,""],line:[10,1,1,""],linux_version:[10,1,1,""],rewrap:[10,1,1,""],run:[10,1,1,""]},"clipostoolkit.cosmk.completion":{features_for_action:[10,1,1,""],product_completer:[10,1,1,""],recipe_completer:[10,1,1,""]},"clipostoolkit.cosmk.container":{Container:[10,2,1,""],ContainerDeviceBinding:[10,2,1,""],ContainerMountpoint:[10,2,1,""],ContainerSession:[10,2,1,""]},"clipostoolkit.cosmk.container.Container":{OCI_SPECS_VERSION:[10,3,1,""],RUNTIME_WORKING_DIR_REPO_SUBPATH:[10,3,1,""],mountpoints:[10,3,1,""],required_mountpoints:[10,3,1,""],run:[10,4,1,""],session:[10,4,1,""],unshared_namespaces:[10,3,1,""]},"clipostoolkit.cosmk.container.ContainerDeviceBinding":{as_dict:[10,4,1,""],cgroup_authorization_dict:[10,4,1,""]},"clipostoolkit.cosmk.container.ContainerMountpoint":{as_dict:[10,4,1,""]},"clipostoolkit.cosmk.container.ContainerSession":{run:[10,4,1,""],snapshot:[10,4,1,""]},"clipostoolkit.cosmk.exceptions":{ContainerSnapshotError:[10,5,1,""],CosmkEnvironmentError:[10,5,1,""],CosmkError:[10,5,1,""],InstrumentationSpecificationError:[10,5,1,""],ProductPropertiesError:[10,5,1,""],ProjectInRepoSourceTreeInUncleanState:[10,5,1,""],RecipeActionError:[10,5,1,""],RecipeConfigurationError:[10,5,1,""],RepoSourceTreeManifestParsingError:[10,5,1,""],SdkBootstrapError:[10,5,1,""],SdkError:[10,5,1,""],SdkNotFoundError:[10,5,1,""],SystemCommandError:[10,5,1,""],UnexpectedRepoSourceTreeStructure:[10,5,1,""],VirtualizedEnvironmentError:[10,5,1,""]},"clipostoolkit.cosmk.features":{RecipeBundleFeature:[10,2,1,""],RecipeConfigureFeature:[10,2,1,""],RecipeFeature:[10,2,1,""],RecipeRootFeature:[10,2,1,""],RecipeSdkFeature:[10,2,1,""],RecipeSignatureFeature:[10,2,1,""],RecipeVirtualizedEnvironmentFeature:[10,2,1,""]},"clipostoolkit.cosmk.features.RecipeBundleFeature":{FEATURED_ATTRIBUTES:[10,3,1,""],NAME:[10,3,1,""],SCHEMA:[10,3,1,""],bundle:[10,4,1,""]},"clipostoolkit.cosmk.features.RecipeConfigureFeature":{FEATURED_ATTRIBUTES:[10,3,1,""],NAME:[10,3,1,""],SCHEMA:[10,3,1,""],configure:[10,4,1,""]},"clipostoolkit.cosmk.features.RecipeFeature":{FEATURED_ATTRIBUTES:[10,3,1,""],NAME:[10,3,1,""],SCHEMA:[10,3,1,""],replace_placeholders:[10,4,1,""]},"clipostoolkit.cosmk.features.RecipeRootFeature":{FEATURED_ATTRIBUTES:[10,3,1,""],NAME:[10,3,1,""],SCHEMA:[10,3,1,""],build:[10,4,1,""],image:[10,4,1,""],run:[10,4,1,""]},"clipostoolkit.cosmk.features.RecipeSdkFeature":{FEATURED_ATTRIBUTES:[10,3,1,""],NAME:[10,3,1,""],SCHEMA:[10,3,1,""],bootstrap:[10,4,1,""],run:[10,4,1,""],sdk:[10,3,1,""]},"clipostoolkit.cosmk.features.RecipeSignatureFeature":{NAME:[10,3,1,""]},"clipostoolkit.cosmk.features.RecipeVirtualizedEnvironmentFeature":{FEATURED_ATTRIBUTES:[10,3,1,""],NAME:[10,3,1,""],SCHEMA:[10,3,1,""],create:[10,4,1,""],destroy:[10,4,1,""],spawn:[10,4,1,""],virtualized_environment:[10,3,1,""]},"clipostoolkit.cosmk.fs":{LoopDevice:[10,2,1,""],OverlayfsMount:[10,2,1,""],SquashfsMount:[10,2,1,""],TmpfsMount:[10,2,1,""],close_loop:[10,1,1,""],loop_devices:[10,1,1,""],mksquashfs:[10,1,1,""],open_loop:[10,1,1,""]},"clipostoolkit.cosmk.healthcheck":{check_system:[10,1,1,""],healthcheck:[10,1,1,""]},"clipostoolkit.cosmk.instrumentation":{InstrumentationLevel:[10,2,1,""],instrumented_recipes:[10,1,1,""]},"clipostoolkit.cosmk.instrumentation.InstrumentationLevel":{DEBUG:[10,3,1,""],DEVELOPMENT:[10,3,1,""],PRODUCTION:[10,3,1,""]},"clipostoolkit.cosmk.log":{critical:[10,1,1,""],debug:[10,1,1,""],error:[10,1,1,""],info:[10,1,1,""],warn:[10,1,1,""]},"clipostoolkit.cosmk.mount":{Mountpoint:[10,2,1,""],mount:[10,1,1,""],mounts:[10,1,1,""],umount:[10,1,1,""]},"clipostoolkit.cosmk.privileges":{ElevatedPrivileges:[10,2,1,""],init_lower_privileges:[10,1,1,""]},"clipostoolkit.cosmk.privileges.ElevatedPrivileges":{possible:[10,6,1,""]},"clipostoolkit.cosmk.product":{Product:[10,2,1,""]},"clipostoolkit.cosmk.product.Product":{SCHEMA:[10,3,1,""],tainted_version:[10,3,1,""],validate_properties:[10,4,1,""],version:[10,3,1,""]},"clipostoolkit.cosmk.recipe":{Recipe:[10,2,1,""]},"clipostoolkit.cosmk.recipe.Recipe":{cache_subpath:[10,3,1,""],meta_schema:[10,3,1,""],out_subpath:[10,3,1,""],validate_metaconfig:[10,4,1,""]},"clipostoolkit.cosmk.sdk":{Sdk:[10,2,1,""],SdkSession:[10,2,1,""]},"clipostoolkit.cosmk.sdk.Sdk":{bootstrap:[10,4,1,""],container_mountpoints:[10,4,1,""],interactive_run:[10,4,1,""],session:[10,4,1,""]},"clipostoolkit.cosmk.sdk.SdkSession":{run:[10,4,1,""]},"clipostoolkit.cosmk.sourcetree":{CommentedTreeBuilder:[10,2,1,""],fix_output_nodes_ownerships:[10,1,1,""],is_repo_root:[10,1,1,""],repo_root_path:[10,1,1,""],snapshot_manifest:[10,1,1,""]},"clipostoolkit.cosmk.sourcetree.CommentedTreeBuilder":{comment:[10,4,1,""]},"clipostoolkit.cosmk.virt":{VirtualizedEnvironment:[10,2,1,""],guess_external_netiface_name:[10,1,1,""]},"clipostoolkit.cosmk.virt.VirtualizedEnvironment":{RUNTIME_WORKING_DIR_REPO_SUBPATH:[10,3,1,""],create:[10,4,1,""],destroy:[10,4,1,""],spawn_virt_manager_console:[10,4,1,""]},clipostoolkit:{cosmk:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","exception","Python exception"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:exception","6":"py:staticmethod"},terms:{"16gb":12,"20th":8,"50gb":12,"abstract":[10,12,13],"case":[1,3,4,6,10,13],"char":10,"class":[3,10,12],"default":[1,2,3,5,8,10,12],"enum":10,"export":7,"final":[1,5,10,13],"function":[1,3,5,10,12],"import":[3,4,8,10],"int":10,"long":[3,10],"new":[1,3,5],"null":[3,10],"public":4,"return":[3,10],"short":1,"static":[4,10],"super":[10,12],"switch":1,"transient":1,"true":[5,10],"try":[5,12],"var":[1,10],"while":[3,10,13],And:10,But:10,For:[3,5,7,9,12],Its:1,LTS:4,NFS:5,NOT:13,Not:[4,5],One:[0,1],RES:10,Such:[1,5],The:[0,1,3,5,6,7,8,10,12,13],Their:1,Then:[1,12],There:1,These:[5,10,12,13],USE:[5,13],Use:[3,10],Using:3,VMs:3,abil:[5,13],abl:[1,7,10,12],about:[3,5,6,11],abov:[1,3,5,10,12],accept:5,access:[3,4,7,10,12],accord:[1,3],account:13,achiev:[1,5],act:[1,10],action:[5,8,10],action_nam:10,action_targeted_recip:10,activ:[6,10,13],actual:[3,5],adapt:[1,5,6],add:[3,7,11],added:[3,4,13],addit:[1,2,3,4,5],additional_cap:10,additional_device_bind:10,address:3,admin:4,affect:5,after:3,again:7,against:[3,5,10],alexand:3,algorithm:1,alia:7,all:[0,1,2,3,4,5,7,8,10,13],alloc:[3,12],alloca:3,allow:[3,5,12,13],alpha:[5,6],alreadi:[1,3,13],also:[0,1,3,5,10,12,13],altern:[5,13],although:3,amd64:[5,12],amd:12,among:[3,8,12],amount:5,android:[4,5,12],ani:[3,5,7,10,11,12,13],annoi:13,annot:13,anoth:[1,10,13],anssi:[5,11],anymor:3,anystr:10,anyth:[1,13],anywai:3,aosp:12,api:[3,6,12],app:2,appear:10,append:[1,4,5],appli:[2,4,5,7,10,13],applic:[0,3,4],approach:3,appropri:[5,8,10,12],apt:12,arbitrari:3,arch:[7,10,12],architectur:[3,5,6],archiv:[5,10,12,13],area:3,arg:10,argcomplet:10,argpars:10,argument:10,argv:10,around:[3,10],as_dict:10,as_modul:10,aslr:3,assembl:[3,8],assert:1,assess:5,asset:6,assign:5,assist:3,assum:5,assur:[1,13],atom:[4,5],attach:10,attack:[3,5],attempt:[3,10],attent:[3,7],attest:[1,4],attribut:[3,10],audit:[3,4],auditor:5,aur:7,authent:4,author:[10,11],authorized_kei:2,auto:10,autom:[1,3],automat:[1,4,7,8,10,12],avail:[0,1,2,3,7,8,10],avoid:[1,3,10,13],awar:5,back:[4,5,10,12],backend:1,backfil:10,background:5,bad:[10,13],badli:10,bandwidth:12,base:[3,4,5,8,10,12,13],bash:[1,4,5,12],basic:[1,3,10,12],becaus:[10,13],been:[1,3,5,10,12],befor:[2,3,8,10,13],begin:12,behind:[5,13],being:[1,3,10],below:[3,5,10],benefit:3,best:3,beta:6,better:3,between:[0,1,3,4,13],binari:[0,1,2,3,4,5,6,10,12,13],bind:[4,10,12],binpkg:6,bio:[1,3],bit:[3,12],blacklist:3,blob:10,block:[1,3,10],bluetooth:5,bool:10,boot:[2,3,6,13],bootload:[0,1,2,4,5,8],bootstrap:[8,10,12,13],both:[1,3,4,5,10,12,13],bound:[4,5],bpf:[3,4,5],bpf_jit_harden:3,branch:[3,7,13],breakpoint:2,bridg:12,bring:13,brk:3,brought:[3,5],brows:5,browser:8,brute:3,buffer:3,bug:[1,3,4,5,9],build:[1,2,4,6,9,10,12],build_step:10,built:[1,3,10,13],bump:13,bundl:[1,5,8,10],bundle_dir:10,buster:12,bypass:3,cach:[3,6,10],cache_subpath:10,cage:0,call:[0,1,3,7,8,10,13],caml:[4,5],can:[1,3,4,5,7,8,10,12,13],canari:3,cannot:[1,3,5,10],capabl:[4,5,12],captur:10,card:4,care:13,carefulli:[0,5],cargo:12,carri:3,caus:[3,10,12],certain:12,certifi:5,cgroup:[4,5,10,12],cgroup_authorization_dict:10,chain:6,chang:[1,2,3,5,7,10,11,12,13],channel:[0,3],charact:13,charg:[3,10,13],check:[3,5,6,10,12],check_system:10,checker:13,checkout:12,checksum:5,chipset:3,choic:3,choos:3,chose:[1,3],chosen:5,chromeo:[4,5],cif:5,citat:3,claim:[3,5],clang:3,clash:3,clean:[1,5,8,10],clear:[5,8,10],clear_cach:10,clear_previous_build:10,cli:13,client:[4,12],clip:[0,1,2,3,4,5,8,9,10,12,13],clipo:[3,6,8,9,10,12],clipostoolkit:[6,12],clone:12,close:[1,5,10],close_loop:10,clutter:13,cmd:10,code:[1,3,9,10,12,13],coincid:5,cold:3,com:[10,12],combin:[1,5],command:[1,4,5,6,7,8,10,12,13],comment:10,commentedtreebuild:10,commit:[5,13],common:[3,12,13],commonli:3,commun:[0,4,5],comparison:13,compat:[12,13],compil:[5,6,7,13],complet:[3,5,7,13],complex:[1,3],compli:10,compon:[1,3,5,6,8],compositor:[4,5],compress:10,compress_data_block:10,compress_extended_attribut:10,compress_fragment_block:10,compress_inode_t:10,compressor:10,compromis:3,concern:[5,10],concret:5,concurr:12,condit:3,conf:[5,12],confidenti:[0,1],config:[3,10,12],config_arch_mmap_rnd_bit:3,config_arch_random:3,config_audit:3,config_binfmt_misc:3,config_bug_on_data_corrupt:3,config_compat_brk:3,config_compat_vdso:3,config_coredump:3,config_crash_dump:3,config_debug_credenti:3,config_debug_f:3,config_debug_kernel:3,config_debug_list:3,config_debug_notifi:3,config_debug_sg:3,config_debug_virtu:3,config_debug_wx:3,config_default_mmap_min_addr:3,config_devkmem:3,config_devmem:3,config_devport:3,config_expert:3,config_fortify_sourc:3,config_fortify_source_strict_str:3,config_gcc_plugin:3,config_gcc_plugin_latent_entropi:3,config_gcc_plugin_randstruct:3,config_gcc_plugin_randstruct_perform:3,config_gcc_plugin_stackleak:3,config_gcc_plugin_structleak:3,config_gcc_plugin_structleak_byref_al:3,config_hardened_usercopi:3,config_hardened_usercopy_fallback:3,config_hibern:3,config_ikconfig:3,config_integr:3,config_intel_iommu:3,config_intel_iommu_default_on:3,config_intel_iommu_svm:3,config_intel_txt:3,config_io_strict_devmem:3,config_iommu_support:3,config_kallsym:3,config_kexec:3,config_kexec_fil:3,config_ksm:3,config_legacy_pti:3,config_legacy_vsyscall_non:3,config_local_init:3,config_lock_down_kernel:3,config_lock_down_mandatori:3,config_magic_sysrq:3,config_microcod:3,config_modify_ldt_syscal:3,config_module_sig:3,config_module_sig_al:3,config_module_sig_forc:3,config_module_sig_hash:3,config_module_sig_sha512:3,config_mtrr:3,config_page_poison:3,config_page_poisoning_zero:3,config_page_sanit:3,config_page_sanitize_verifi:3,config_page_table_isol:3,config_panic_on_oop:3,config_panic_timeout:3,config_proc_kcor:3,config_random_trust_cpu:3,config_randomize_bas:3,config_randomize_memori:3,config_refcount_ful:3,config_reset_attack_mitig:3,config_retpolin:3,config_sched_stack_end_check:3,config_seccomp:3,config_seccomp_filt:3,config_secur:3,config_security_dmesg_restrict:3,config_security_perf_events_restrict:3,config_security_selinux:3,config_security_selinux_bootparam:3,config_security_selinux_develop:3,config_security_selinux_dis:3,config_security_tiocsti_restrict:3,config_security_yama:3,config_slab_canari:3,config_slab_freelist_harden:3,config_slab_freelist_random:3,config_slab_harden:3,config_slab_merge_default:3,config_slab_sanit:3,config_slab_sanitize_verifi:3,config_slub_debug:3,config_slub_debug_on:3,config_stackleak_metr:3,config_stackleak_runtime_dis:3,config_stackleak_track_min_s:3,config_stackprotector:3,config_stackprotector_strong:3,config_static_usermodehelp:3,config_static_usermodehelper_path:3,config_strict_devmem:3,config_strict_kernel_rwx:3,config_strict_module_rwx:3,config_syn_cooki:3,config_tcg_tpm:3,config_user_n:3,config_vmap_stack:3,config_x86_intel_memory_protection_kei:3,config_x86_intel_mpx:3,config_x86_intel_umip:3,config_x86_msr:3,config_x86_pat:3,config_x86_smap:3,config_x86_vsyscall_emul:3,configur:[1,2,4,5,6,7,8,10],confin:[0,5],congratul:12,connect:[4,5,10],consequ:[5,11,12],consid:[3,5],consol:[2,4,10],constrain:[5,13],construct:[10,13],consum:13,contain:[1,3,5,8,13],container:12,container_devic:10,container_mountpoint:10,container_sess:10,containerdevicebind:10,containermountpoint:10,containersess:10,containersnapshoterror:10,content:[1,3,8,10,12],context:[10,12],contextu:10,continu:[12,13],contrib:12,contribu:6,contribut:6,control:[0,3,4],controversi:3,conveni:7,copi:[3,7,8,10],core:[0,1,3,6,10],core_:1,core_st:1,coredump:2,correct:1,correctli:[3,12],correspond:[5,10,13],cosmk:[6,7,12,13],cosmkenvironmenterror:10,cosmkerror:10,could:[1,3,10,13],count:3,counter:3,coupl:[7,10],cover:3,coverag:3,cpu:3,cpython:[7,12],crash:3,crate:6,creat:[1,2,3,5,7,8,10,12,13],creation:[10,13],credenti:[4,5],critic:10,crng:3,cross:12,crosvm:5,crush:[4,5],crypt:[1,4,5],cryptograph:[1,3,5],cryptsetup:1,current:[1,3,5,6,7,8,9,10,12],custom:3,cut:3,cve:3,cwd:10,daemon:[4,12],dai:8,danger:3,data:[3,10],databas:1,deal:1,debian:[6,7,12],debootstrap:12,debug:[3,6,10,13],debugf:3,decid:3,decrypt:[1,4,5],dedic:[5,10,13],default_security_dac:3,defeat:3,defens:3,defin:10,definit:10,deni:12,deny_new_usb:3,depend:[5,6,10,13],deploi:[8,13],deploy:[1,3,8],deprec:[1,3],depth:3,deriv:[1,5,6,10,13],describ:[2,3,7,10,13],design:[3,11],desktop:[4,5],destin:10,destroi:10,destroy_preexist:10,detail:[3,5,8,13],detect:[3,5,10],detect_sparse_fil:10,determin:6,dev:[1,3,10,12],devel:12,develop:[1,3,6,8,10,12,13],devic:[1,10,13],device_sidechannel_restrict:3,dict:10,differ:[1,3,4,5],diod:[4,5],direct:[0,3,5],directli:[1,3,8,10,12,13],directori:[2,5,7,8,10,12],disabl:[2,3,5],disallow:3,discard:5,discret:5,discuss:3,disk:[3,6,7,8,10,13],displai:[4,5],distfil:6,distinct:[5,12],distribut:[6,7],dma:3,dmesg:3,dmesg_restrict:3,dnf:12,dnsmasq:12,doc:[6,8],docker:12,docroot:[6,8],document:[0,3,5,12,13],doe:[1,3,7,10,11,12,13],doing:10,domain:10,done:10,download:[5,12],downstream:[11,13],dracut:[1,2],draft:5,drive:4,driver:5,drop:[3,10],due:[1,3,12,13],dummi:[1,10],dump:3,duplex:10,duplic:10,dure:[1,2,3,5,8,10,13],dynam:4,each:[0,1,2,4,5,8,9,13],earli:5,eas:[1,2,3],easier:3,easili:[10,12,13],ebtabl:12,ebuild:[5,13],eclass:13,edit:[4,12],edk2:1,effect:[6,10,12],effort:5,efi:[0,1,3,4,5,6,7,13],efiboot:[5,8],egid:10,either:[3,5,7,10,12,13],element:10,elementtre:10,elev:[5,10,12],elevatedprivileg:[10,12],elf:3,els:1,emb:12,emerg:13,emplac:4,empti:1,emul:1,enabl:[1,2,3,5,6,7,8,10],enclos:13,encount:12,encrypt:[1,3,4,5],end:[1,3,13],endors:1,enforc:[3,4,5],engin:12,enhanc:10,enough:[1,3,12],enrol:[1,5],ensur:[1,3,5,10,12],entir:[3,5,6,13],entiti:0,entri:10,entropi:[3,4],enumer:10,env:10,environ:[0,6,10,13],ephemer:[3,10,12],equal:10,equival:3,eras:[3,13],error:[1,10,12],escap:10,escrow:[4,5],esp:1,essenti:12,etc:[2,4,5,8,10,12,13],eth:10,ethernet:10,etre:10,euid:10,evalu:10,even:[3,12],eventhough:10,eventu:[3,10],ever:3,everi:[1,5],everyth:[4,8,10,12],evil:5,evolv:4,examin:5,exampl:[5,7],except:[4,13],exclud:13,exclus:[3,5],execut:[0,1,7,10,13],execv:10,exhaust:[2,3,5],exist:[1,3,10],exit:10,expect:[1,3,4,10,12,13],expens:1,experi:13,explain:10,explan:3,explicit:10,explicitli:3,exploit:3,expos:[12,13],ext4:1,extend:[3,10,11],extens:[1,3,5,11,12],extent:10,extern:[3,5,6,10,12],extra:3,extra_latent_entropi:3,extract:3,fact:[3,10,12],facult:10,fail:[3,10],failur:[1,4,5,10,12],fallback:[4,5],fals:10,famou:10,fast:3,faster:12,featur:[5,6,12,13],featured_attribut:10,features_for_act:10,fec:1,fedora:[1,12],fetch:[6,8,13],fido:5,fifo:3,fig:[0,1],file:[1,4,5,7,8,10,12],filesystem:[1,8,10,12,13],fill:3,filter:[3,5,10],find:3,find_dupl:10,fine:[3,5],finer:3,firmwar:[1,4,5,10],first:[1,5,6,7,10,11],fit:12,fix:[3,4,7,12],fix_output_nodes_ownership:10,flag:[5,10,13],flash:4,flatpak:[4,5],flatten:10,flip:10,flow:0,flush:3,focu:3,folder:[1,4,7,8,13],follow:[1,3,5,12],foral:12,forbidden:0,forc:3,form:[3,7,10,13],format:10,fortify_sourc:3,forward:[1,5,10,13],found:[5,10,13],fragment:10,free:[3,10,12],freelist:3,french:[5,11],from:[0,1,2,3,4,7,8,10,11,12,13],fsanit:3,fstack:3,full:[1,3,6,10,13],fulli:3,further:3,fuse:5,futur:[1,3,10,11],gadget:3,gain:12,gather:3,gcc:3,gcc_plugin_latent_entropi:3,gdb:2,gener:[1,4,8],gentoo:[4,6,8,12],get:10,gid:10,gigabyt:12,gir1:12,gitconfig:12,github:[5,7,9,10,12,13],gitlab:5,give:[10,13],given:[1,3,5,10,13],global:[6,10],gnupg2:12,gnupg:12,goe:0,going:[1,3],good:[1,5,13],gouv:9,gpt:1,gpu:3,grain:3,grant:4,granular:3,graphic:0,greater:10,grep:2,group:[1,12],grsecur:3,guarante:[3,5,6],guard:3,guess:10,guess_external_netiface_nam:10,guest:[1,3],guid:[5,6,13],gummiboot:1,gzip:10,handi:13,handl:[1,3,7,10],hard:[1,3],harden:[3,4,8],harder:3,hardwar:[0,3,6,12],has:[1,3,5,7,10,11,12,13],hash:[1,5],hassl:10,have:[1,3,5,7,9,10,12,13],header:[1,12],heap:3,heavi:1,help:[3,12],helper:[3,6,7,10,12],here:[1,3,5,12,13],hide:[2,3],hierarchi:[1,13],high:0,higher:3,highest:1,histori:[6,12],hold:[1,5,12,13],home:2,homepag:6,hook:[3,10,12],host:[0,1,4,5,10,13],host_devic:10,hostnam:10,hous:13,howev:[1,3,5,12,13],http:[10,12],hypervisor:3,hypothes:6,hypothet:13,ibpb:3,idea:13,ident:[5,13],identifi:[10,11],ifi:10,igfx_off:3,ignor:4,imag:[1,3,5,6,10,12],image_step:10,immedi:3,immut:5,impact:3,implement:[3,5,10,12,13],impli:3,impos:3,imposs:5,improv:[3,4],inaccur:10,includ:[1,3,4,5,7,8,10,12,13],inclus:4,incoher:10,incorpor:3,increas:[1,2,3],inde:3,indent:10,independ:[4,10],info:10,inform:[2,3,11,12],infrastructur:[3,5,9,13],init:[3,12],init_lower_privileg:10,initi:[0,1,3,5,6,10],initramf:[3,4,5],inject:3,inod:10,input:5,insid:[5,8,10],inspir:[4,5],instal:[1,2,4,6,7,13],instanc:[1,5,10],instanci:10,instead:[1,3],instruct:[3,5,6,7,8,12,13],instrument:[3,6],instrumentationlevel:10,instrumentationspecificationerror:10,instrumented_recip:10,insur:5,intefac:10,integr:[3,6,13],intel:[3,5,12],intel_iommu:3,intend:[3,10,12,13],intention:13,inter:[0,4,5],interact:[2,4,5,6,10,13],interactive_run:10,interest:[1,3,13],interfac:[3,10],interlac:[10,12],intermedi:8,intern:[12,13],interpret:[3,4,5],intevent:10,intra:[3,4,5],intreset:12,introduc:13,intrus:5,invalid:3,invers:3,invit:7,invok:10,involv:5,ioctl:3,iommu:[3,5],ipsec:[4,5],ipv4:3,ipv6:3,is_repo_root:10,is_tty_attach:10,isol:[0,3,4],issu:[1,3,7,9,10,12],item:[3,13],iter:[8,10],its:[1,3,5,6,10,12,13],itself:[5,10],jail:13,jit:3,job:[3,12],join:10,journal:4,journald:5,json:10,jump:12,just:[3,7,8,10,12,13],justfil:[6,7,12],justifi:5,kaslr:3,keep:[3,5,7,8,10,12],kei:[1,3,4,5,10],kek:1,kept:10,kernel:[1,2,6,8,10,12,13],kexec:[3,5],keyctl:1,keyfil:1,keyr:12,keyslot:1,kind:[10,13],know:6,known:[1,4,5,12],kpti:3,kptr_restrict:3,kvm:[3,4,5,6,8,12],kwarg:10,l1tf:3,lack:13,languag:12,laptop:4,larg:[12,13],last:13,latent:3,later:[5,12],latest:[1,4],launch:[7,10,12,13],layer:[1,3,12],layout:[3,6],lead:[10,12],leak:3,leakag:3,least:[3,7,12],leav:1,left:12,legal:13,len:10,less:2,level:[0,3,6,7,10],leverag:3,lfs:12,lgpl:11,libc:3,libguestf:8,librari:[1,12],libtpm:[1,7],libvirt:[1,7,8,10,12],libvirt_domain_xml_templ:10,libvirt_network_xml_templ:10,licens:11,lifecycl:5,lifetim:5,like:[1,5,10,12],limit:[3,10,13],line:[1,4,5,6,10,12],link:[3,5,13],linux:[1,3,6,7,10],linux_vers:10,list:[1,2,3,4,5,7,10,12],littl:3,live:10,load:[1,2,3,5],loadabl:3,loader:1,local:[2,3,4,5,10],locat:[1,2,3,10,13],lock:[3,4,5],lockdown:3,log:[2,3,4,5,7,8],logic:[0,1,5,10,13],login:2,look:[1,10,13],loop:10,loop_devic:10,loopback:10,loopdevic:10,losetup:[10,12],lot:[5,12],lower:[2,10,12],lowerdir:10,lsm:[3,4,5],ltrace:2,luk:5,luks2:4,lvm:1,machin:[1,3,5,7,8,10,12,13],made:[2,3,5,8,10,12],mai:[0,1,3,5,8,9,10,11,12,13],maid:5,mail:9,main:[1,3,6,8,10,13],mainli:[5,8],mainlin:3,maintain:[3,5,11],mainten:[5,6],mainvg:1,major:12,make:[1,3,5,10,13],makefil:12,man:5,manag:[1,4,7,10,12,13],mandatori:4,mani:3,manifest:[5,6,10,12],manipul:[7,10],manner:10,manual:[1,5,8],manufactur:[1,3],map:3,mark:3,master:10,match:[10,13],matter:13,maxim:3,maximum:3,mean:[1,10],meant:[10,13],measur:[1,4,5],mechan:[1,3,5,10],mediat:0,medium:10,meet:[5,10,13],meltdown:3,mem:3,memori:[1,3,12],mention:[1,3],merg:[3,4],mergeddir:10,messag:10,met:5,meta:[2,10],meta_schema:10,metaclass:10,metadata:[1,3],method:[5,8,10,12],microcod:3,microphon:4,microsoft:1,might:[3,7,10,12,13],mileston:6,mind:3,mindirect:3,minim:[1,3,5,13],minimum:12,minut:[7,12],mirror:[5,13],miscellan:[3,10],miss:[10,12,13],mitig:[3,5],mix:3,mkdir:12,mksquashf:[10,12],mmap:3,mmu:5,mnt:[1,10],mode:[3,12,13],model:3,modern:3,modifi:[7,11,13],modul:[2,3,5,13],modules_dis:3,moment:[1,3],more:[1,3,5,6,11],moreov:3,most:[1,3,4,5,7,10,13],mostli:5,mount:[1,3,4,5,12],mountpoint:10,msg:10,msr:3,mtrr:3,much:3,multi:6,multilib:5,multipl:[1,2,3,4,7,10,12],must:[1,2,3,5,7,10,12,13],mutablemap:10,mypi:13,myusernam:12,name:[3,5,10,11,12,13],namespac:[3,4,5,10,12],natur:1,necessari:1,need:[1,3,7,8,10,13],nemu:5,net:3,network:[10,12],never:10,newli:3,next:[4,7],nightli:[5,13],no_new_priv:5,no_snapshot_group:10,node:[10,13],nodev:[12,13],noexec:[5,12,13],non:[2,3,10],none:10,nosuid:[5,13],note:[1,3,5,10],now:[0,3,9,12],nowadai:3,number:[1,3,13],o_mayexec:4,object:[6,10,13],obtain:3,occas:12,occur:10,oci:[10,12],oci_specs_vers:10,off:3,offer:1,offlin:[5,13],often:13,onc:[1,3,5,7,8],one:[1,3,5,10,12,13],ones:[1,3],onli:[1,2,3,4,5,8,10,12,13],onlin:11,onto:10,open:[1,3,5,6,8,10,12],open_loop:10,opencontain:10,openpgp:13,openssh:12,oper:[3,10,12,13],opposit:13,optim:1,option:[1,4,5,10],order:[2,3,5,6,7,8,10],organ:[2,6],organiz:13,origin:[3,10,11,12],other:[0,1,3,4,7,10,13],otherwis:[3,12,13],our:[1,3,13],out:[1,3,5,6,8,10],out_subpath:10,output:[8,10,12,13],outsid:10,outside_of_virtualenv:10,over:[4,5,7,10,11],overal:13,overflow:[3,10],overlai:5,overlayf:[10,12],overlayfsmount:10,overli:10,overridden:3,overview:0,overwritten:[3,10],ovmf:10,ovmf_cod:10,ovmf_firmware_cod:10,ovmf_firmware_vars_templ:10,ovmf_vars_templ:10,own:[1,3,5,11],owner:1,ownership:13,packag:[5,6,7,10,12,13],pacman:12,page:[3,5,7,8,12,13],page_poison:3,pai:7,pam:4,panel:[4,5],panick:3,paragraph:7,paramet:[5,6,10],paravirtu:5,pars:10,parsed_arg:10,part:[3,5,10,12,13],parti:5,particular:[3,13],particularli:3,partit:[3,5,6],partli:1,pass:[1,3,5,10],passthrough:1,password:[2,3,4,5,7,10],past:3,patch:[3,4,9,13],path:[3,7,10],patienc:7,pax:3,pcr:1,peopl:1,pep:10,per:5,perf_event_open:3,perf_event_paranoid:3,perform:[1,3,10],peripher:4,perl:4,perman:4,permiss:[3,5,12],permit:12,persist:[1,2,3],pgp:5,phase:5,physic:[3,5],pid:[3,5],pid_max:3,pivot_root:1,pkg:12,pki:1,place:3,placehold:10,plai:3,plan:[3,6,12],platform:[4,5,6,12],pleas:[3,5,6,7,9,10,12],plugin:3,point:[1,3,10,12,13],pointer:[2,3,5],pointless:13,poison:3,polici:1,popov:3,popul:13,port:[3,4],portag:[3,4,5,6,8,12],portion:3,posit:3,possibl:[1,3,10],post:11,postlude_command:10,potenti:[3,10,13],practis:13,pre:4,preciou:3,preclud:11,predefin:3,prefer:[3,5],prefix:[7,10],prelude_command:10,present:[1,10,13],prevent:[3,10,13],preview:6,previou:[3,10],primari:1,primarili:10,primit:[3,5],principl:3,printer:4,prioriti:5,privileg:[3,5,7,12],probabl:3,probe:10,problem:1,problemat:13,proc:[3,10],process:[1,3,5,8,10,12,13],procf:3,produc:[10,13],product:[2,3,6,7,8],product_complet:10,productpropertieserror:10,products_clipo:13,profil:[3,13],program:[3,5,12],progress:5,project:[2,4,5,8,9,10,12,13],projectinreposourcetreeinuncleanst:10,promis:3,prompt:7,prop_dict:10,proper:10,properli:[3,4,5,7,10,13],properti:10,propos:10,proprietari:4,protect:[1,2,3,5],protected_fifo:3,protected_hardlink:3,protected_regular:3,protected_symlink:3,protector:3,protocol:5,prove:1,provid:[1,3,8,10,12,13],provis:1,proxi:5,pseudo:[3,10],pte:3,pti:3,ptmx:10,ptrace:[2,3],ptrace_scop:3,pty:3,publicli:5,publish:11,pull:[9,12],punctual:12,pure:3,purpos:[1,3,7,8,10,12,13],pursu:10,pylint:13,pypi:13,python2:12,python3:12,python:[4,5,6,7,12,13],qa_strict_execstack:5,qa_strict_flags_ignor:5,qa_strict_multilib_path:5,qa_strict_prestrip:5,qa_strict_textrel:5,qa_strict_wx_load:5,qcow2:[7,8,10],qcow2_main_disk_imag:10,qemu:[3,4,5,6],qualiti:13,question:9,quick:13,quotat:11,rais:10,ram:12,ramf:1,random:[1,3,10],rang:3,rather:13,rational:[5,13],rdrand:3,read:[1,3,4,5,10,12],readabl:12,readi:[10,12],readonli:10,readonly_root:10,real:[3,10],realist:5,reason:[1,3,10,13],reboot:3,rebuild:[7,8,13],rebuilt:[4,8],recal:10,receiv:[10,13],recent:[3,12],recip:[2,5,6,7],recipe_complet:10,recipeactionerror:10,recipebundlefeatur:10,recipeconfigurationerror:10,recipeconfigurefeatur:10,recipefeatur:10,reciperootfeatur:10,recipesdkfeatur:10,recipesignaturefeatur:10,recipevirtualizedenvironmentfeatur:10,recommend:[3,5,10,12],record:1,recov:3,recoveri:[1,4],red:3,redirect:10,reduc:[3,5],reduct:3,redund:3,refer:[3,5,6],referenc:[5,10],reflect:[10,13],refus:5,regard:[10,12],regardless:11,regex:10,region:5,regist:3,regular:3,rel:[10,12],relat:[2,3,10,12,13],releas:6,relev:[1,3],reli:[1,3,13],reliabl:3,reload:3,remain:[3,4],remap:3,remot:[1,2,3,4,13],remov:[5,8,10],reorgan:10,replac:[1,5,10,12],replace_placehold:10,repo:[2,6,10],repo_root:13,repo_root_path:10,report:3,repositori:[5,7,9,12],reposourcetreemanifestparsingerror:10,reproduc:4,republ:[5,11],request:[9,10],requir:[0,1,2,3,4,6,7,10,13],required_mountpoint:10,reserv:5,reset:7,resid:5,resili:5,resist:1,resourc:[1,3,5,13],respect:[3,7,10,13],respons:[0,3,10],restart:8,restrict:[3,12,13],result:[1,5,8,10,13],resum:2,ret2usr:3,retain:10,retpolin:3,retriev:10,reus:8,reusabl:10,reveal:3,review:9,revis:[5,13],rewrap:10,right:10,risk:3,rng:[3,4],roadmap:[5,6],robust:3,rogu:3,role:3,rollback:[1,5],root:[1,2,3,5,7,8,10],rootf:[3,6,8,10,12,13],rootfs_arch:10,rootkit:3,rop:3,rotat:[4,5],rout:[3,10],run:[0,3,6,8,10],runc:10,runc_container_nam:10,runtim:[3,5,10,12,13],runtime_working_dir_repo_subpath:10,rust:[5,13],rustc:12,rustup:12,safe:[3,8,13],safeti:10,said:5,same:[3,5,10],sandbox:5,saniti:3,satisfi:1,save:[1,10],sbin:7,sbsigntool:1,scanner:4,scenario:[6,12],schema:10,scope:3,scratch:[8,13],screen:[4,5],script:[1,3,7,10,12],sdk:[5,6,12],sdk_context:10,sdk_debian:8,sdkbootstraperror:10,sdkerror:10,sdknotfounderror:10,sdksession:10,seal:[1,4,5],seamless:10,seccomp:[3,4,5],second:1,secret:[3,4,5],section:[2,3,8,10,12],secur:[2,6,10,13],see:[2,3,5,7,10,12,13],seed:1,seem:[10,13],seen:3,select:[7,10],selinux:[3,4],send:9,sens:[3,10],sensit:3,separ:[0,3,13],septemb:8,sequenc:[12,13],seri:3,serial:2,serv:[5,13],server:[4,5,12,13],servic:[0,5,6],session:[0,3,4,10],sesssion:10,set:[1,3,4,5,7,9,10,12,13],setuid:3,setup:[2,4,6,8,13],sever:[0,1,3,5,12],sha256:5,sha512:3,shall:[5,10],share:[3,5,10],shared_host_netn:10,shebang:3,shell:[2,7,10,12,13],ship:1,shortcut:10,should:[3,5,10,11,12,13],show:13,shown:[0,1],side:[3,10],sign:[1,2,3,4,5,10],signatur:[1,4,5,13],signific:3,significantli:12,similar:[3,4,5],similarli:[1,3,8,12],simpl:[3,10,12],simpler:3,simpli:3,simplifi:10,simultan:1,sinc:[5,10,12,13],singl:[1,3,5,10],size:[3,4,12],skip:12,slab:3,slab_canari:3,slab_sanit:3,slab_sanitize_verifi:3,slash:13,slot:5,slub_debug:3,slub_nomerg:3,smap:3,smartcard:[4,5],smt:3,snapshot:[10,13],snapshot_group:10,snapshot_manifest:10,socket:[4,5],softwar:[1,5,6,8,11],some:[1,3,4,7,8,10,12,13],somedai:3,somewhat:5,sound:4,sourc:[3,6,7,8,10],source_dir:10,space:[1,3,5,10,12],span:10,spars:10,spawn:[10,13],spawn_virt_manager_consol:10,spec:10,spec_store_bypass_dis:3,specif:[0,2,3,5,6,7,9,10,13],specifi:[10,13],spectr:3,spectre_v2:3,spectre_v2_us:3,specul:3,speed:[8,13],speedup:8,sphinx:8,spiceclientglib:12,spiceclientgtk:12,split:[0,4,8,10,12],spoof:3,sprai:3,squashf:[1,5,10],squashfil:10,squashfs_fil:10,squashfs_filepath:10,squashfsmount:10,src:[3,5,6,12],src_external_supertool:13,ssh:[2,4,5],ssi:9,stabl:[6,12,13],stack:[1,3],stackleak:3,stage3:[5,13],stage:[5,6,8],stand:3,standalon:12,standard:[1,5,10],start:[0,3,4,5,10],startup:[3,5],state:[1,4,5,10],stateful:5,statu:[4,5],stderr:10,stdin:10,stdout:10,stdouterr:10,step:[1,2,5,6,7,10,12,13],stibp:3,still:[1,2,3,4,6,8,10,12],storag:[4,5,12],store:[1,3,5,7,12,13],store_xattr:10,str:10,strace:2,stream:10,stretch:12,strict:[3,5],stricter:5,strictest:3,strictli:5,string:10,strip:[10,13],strong:3,structleak:3,structur:[3,10,13],stuff:10,sub:[0,10,12,13],subclass:10,subdirectori:8,subfold:13,submit:9,submodul:10,subprocess:10,subset:3,subsystem:3,success:[7,10],successfulli:12,sudo:[7,10,12],sudo_gid:10,sudo_ourselv:10,sudo_uid:10,sudoer:[7,12],suffici:3,suggest:[5,10,11],suid:[4,5],suid_dump:3,suitabl:10,sujust:[7,8],summari:[2,6],super_tool:13,superus:3,supervisor:3,support:[1,2,5,6,8],suppos:3,surfac:[3,5],suspend:3,swap:[1,3,12],swtpm:[1,7],symbol:[3,13],symlink:13,sync:12,synchron:13,syncooki:3,syntax:12,sys:[1,2,3,10],syscal:[3,10],sysctl:[2,6],sysf:3,sysroot:1,system:[1,6,10],systemcommanderror:10,systemd:[1,2,3,4,5],syu:12,tabl:[3,10],tailor:5,taint:10,tainted_vers:10,take:[7,10,12,13],taken:3,tamper:[1,5],tangibl:13,tar:10,tarbal:5,target:[3,10,13],task:[3,7,13],tcb:4,tcg:1,tcp:[3,5],tcsd:1,techniqu:3,technolog:[3,5,12],tediou:5,templat:[1,10],temporari:[1,8,10],temporarili:10,term:[1,5,11],termin:10,test:[6,12],text:[5,10],than:[3,12,13],thank:[3,7,13],theft:5,thei:[3,12,13],them:[1,3,5,10,13],therefor:[3,5,10,12,13],thi:[1,2,3,4,6,7,8,10],third:5,those:[0,1,5,7,8,10,12,13],though:[3,5],thought:5,threat:[3,6],three:[1,8],through:[0,1,3,4,5,10,12],throughout:12,thu:[1,3,5,13],thunk:3,thwart:3,tightli:3,time:[1,3,4,5,7,10,11,12,13],timeout:[2,10],timer_entropyd:4,tiocsti:3,tiocsti_restrict:3,tip:12,tmpf:[1,10,12],tmpfsmount:10,tmux:2,toctou:3,todo:10,togeth:[12,13],token:5,toler:1,toml:[2,7,10],tool:[1,2,4,6,7,8,10,12,13],toolkit:[5,6,8,10,12],tpm2:1,tpm2_:1,tpm2_evictcontrol:1,tpm:[3,4,5],tpmrm0:1,trade:3,trademark:5,tradit:10,trail:10,trait:10,transfer:4,transit:5,transport:5,travers:12,treat:10,tree:[2,5,6,7,8,10],treebuild:10,tri:[3,10],trick:3,trigger:[7,13],trivial:3,trouser:1,trust:3,trustedgrub2:1,tss2:1,tss:1,tty:[3,10],tune:[2,5,6],tunnel:[4,5],tupl:10,turn:1,tweak:13,two:[1,3,5,12],type:[5,10],typic:12,u2f:[4,5],ubuntu:12,uefi:[1,5,10],uid:10,ultim:3,umount:10,unattend:4,unavail:8,unchang:12,uncompress:1,uncondit:3,undefin:12,under:[5,7,10,11,12],underli:10,underscor:13,understand:13,unexpect:[4,10],unexpectedreposourcetreestructur:10,unhandl:10,union:10,uniqu:10,unix:[4,5,10],unknown:10,unlock:[3,4,5],unmount:10,unneed:10,unnotic:1,unpars:10,unpredict:5,unprivileg:[0,3,5,10,12],unprivileged_bpf_dis:3,unprivileged_userns_clon:3,unread:3,unsaf:10,unseal:[1,4,5],unshared_namespac:10,unstabl:12,unstag:10,unsupport:3,until:[4,13],untrust:3,updat:[1,3,8],upgrad:[1,5],upon:5,upperdir:10,upstream:[3,4,8,13],uptim:5,urandom:10,usag:[10,12,13],usb:[3,4,5],usbguard:5,use:[1,3,5,6,7,8,10,11,12,13],use_branch:10,used:[1,3,5,10,12,13],useful:[3,12,13],user:[0,1,3,7,10,12],userfetch:5,userland:12,usermod:3,usernam:12,userpriv:5,usersandbox:5,userspac:[1,3,5],uses:[3,5,10],using:[1,3,4,6,8,10,12],usr:7,usual:[0,1,10,13],util:[1,8,10,12,13],valid:[3,4,5,10],validate_metaconfig:10,validate_properti:10,valu:[1,2,3,5,7,10],valueerror:10,variabl:[7,10],variant:3,variou:[1,3,8],vendor:[5,12,13],venv:[7,12],veri:[3,5],veriexec:4,verif:[1,5],verifi:[1,3,10,13],veriti:[3,5],versa:10,version:[1,3,4,5,6,10,11,12],via:[1,3,12],vice:10,vim:2,virt:12,virtio:[4,5],virtual:[1,3,7,8,10,12,13],virtual_env:10,virtual_machin:10,virtualenv:[10,13],virtualized_environ:10,virtualizedenviron:10,virtualizedenvironmenterror:10,vital:10,vmx:3,volum:[1,5],voluntarili:3,vserver:[4,5],vsock:5,vsyscal:3,vulner:3,wai:[1,3,5,11,13],walk:12,want:[1,3,7,12,13],warn:[3,10],wayland:[4,5],weaken:3,web:5,webcam:4,well:[5,10,12],were:[1,3],what:[1,3,10],wheel:13,when:[1,3,7,10,12,13],where:[3,10,12,13],whether:[1,10],which:[1,2,3,5,7,8,10,12],whitelist:[3,5],whitespac:10,whole:[5,10,13],whose:[3,6,10,12],why:[3,10],wide:5,wireless:[5,10],wish:6,within:[5,10,13],without:[1,2,3,7,10,12,13],won:13,word:[1,3,10,13],work:[1,3,8,10,12],workaround:7,workdir:10,workstat:[5,8,13],worth:3,would:[1,3,5,10],wrap:[1,10],wrapper:[10,13],writabl:[3,5],writable_assets_dirs_at_build:10,writable_repo_root:10,write:[3,4,10],written:5,x86:[3,5,12],x86_64:[3,12],xml:10,xml_domain_templ:10,xml_network_templ:10,xxx:10,yama:3,yet:[3,5,6,10,12],you:[1,3,6,7,8,9,11,13],your:[3,6,7,8,11],zero:[3,10],zone:3},titles:["Architecture","Boot chain and integrity guarantees","Development and debug","Kernel","Roadmap","Security objectives","Welcome to the CLIP OS project documentation!","Building","Build steps","How to contribute","<code class=\"docutils literal notranslate\"><span class=\"pre\">cosmk</span></code> Python API","How to derive this project","Environment setup","Source tree organization"],titleterms:{"case":[5,12],"default":[4,7],"function":7,"while":12,LFS:[5,12,13],With:1,__main__:10,about:[7,12,13],access:[5,13],acpi:3,action:13,activ:7,add:13,administr:[4,5],afford:5,all:12,alpha:4,altern:12,api:10,applic:5,arbitrari:[4,5],architectur:[0,4,12],asset:[5,13],assign:4,assist:5,attest:5,authent:5,automat:5,avail:[4,5,13],avoid:12,awar:4,back:13,backup:5,befor:[7,12],below:13,beta:4,binari:8,binpkg:13,bit:5,boot:[1,4,5,8],bootup:5,build:[5,7,8,13],built:[5,8],bundl:13,cach:[8,13],certif:5,chain:[1,4,5],check:13,choic:1,chosen:1,clip:[6,7,11],clipo:[2,13],clipostoolkit:[10,13],code:[4,5],command:3,common:[5,10],compil:[3,4,12],complet:10,compon:0,compromis:5,confidenti:[4,5],configur:[3,12,13],confin:4,contain:[10,12],content:[5,13],continu:8,contribut:9,control:5,conveni:12,core:[2,5,8,13],cosmk:10,crate:13,criteria:5,current:13,custom:[5,13],data:[4,5],debian:[8,13],debug:2,depend:12,deploy:5,deriv:11,determin:4,develop:[2,4,5],devic:[3,4,5,12],directori:13,disabl:7,disk:[1,5],distfil:[5,13],distribut:12,doc:13,docroot:13,document:[6,8],done:12,driver:3,easier:13,effect:2,efi:8,efiboot:[2,13],emul:3,enabl:[4,12],ensur:7,entir:12,environ:[4,5,7,12],evalu:5,exact:5,exampl:13,except:[5,10],execut:[3,4,5],exhaust:13,extern:13,featur:[3,4,10],fetch:12,file:[3,13],filesystem:5,filter:12,firewal:4,firmwar:3,first:4,fleet:5,forgot:12,format:3,from:5,full:[5,7],further:7,gener:3,gentoo:[5,13],get:[6,7,12],git:[5,12,13],global:12,going:7,graphic:[4,5],guarante:1,hack:3,harden:5,hardwar:[1,4,5],healthcheck:10,helper:13,host:12,how:[6,9,11,12,13],hypothes:5,imag:[7,8,13],impact:5,implement:1,improv:1,infrastructur:[8,12],inher:5,initi:4,initramf:1,instal:[5,12],instrument:[2,7,10],integr:[1,4,5,8],interact:0,interfac:5,isol:5,issu:5,journal:5,justfil:13,kernel:[3,4,5],kvm:7,languag:5,layout:[1,4],level:[2,4,5],limit:5,line:3,linux:[4,5,12,13],local:7,log:10,login:7,loop:12,luk:1,main:4,mainten:13,make:12,manag:[3,5],mandatori:5,manifest:13,memori:5,mess:13,mileston:4,mode:5,model:[4,5],modul:10,more:12,mount:[10,13],multi:[4,5],necessari:12,need:12,network:[3,5],nomenclatur:13,non:[4,5,13],notabl:13,object:[1,3,5],open:4,oper:5,option:[3,13],order:1,organ:13,origin:[5,13],other:[5,12],out:[12,13],overlai:13,ovmf:1,packag:8,paramet:3,parti:13,partit:[1,4,8,13],path:13,perform:5,persist:5,plan:[1,4],platform:13,portag:13,potenti:5,power:3,pre:8,preview:4,principl:5,privileg:10,processor:3,product:[10,13],profil:5,progress:[4,11],project:[6,7,11],properti:5,provid:5,provis:5,python:10,qemu:[1,2,7,8,12],quicker:12,real:1,recip:[10,13],recoveri:5,relat:5,releas:4,remot:5,repo:[12,13],repositori:13,represent:13,reproduc:5,requir:[5,12],restrict:[4,5],roadmap:4,robust:[4,5],role:[4,5],root:[4,12,13],rootf:1,rule:4,run:[7,12,13],runc:12,rust:12,safe:5,scenario:5,script:13,sdk:[8,10,13],secur:[1,3,4,5],separ:5,servic:4,session:5,setup:[1,3,5,7,12],softwar:[4,12],solut:1,sourc:[4,5,12,13],sourcetre:10,specif:1,squashf:12,src:13,stabl:4,start:6,statu:6,step:8,sub:5,subdirectori:13,summari:5,support:[3,4,7,12],sure:12,synchron:12,sysctl:3,system:[0,3,4,5,12],systemd:13,test:[1,7,8],thi:[5,11,12,13],third:13,threat:5,toolkit:[7,13],tpm:[1,7],track:5,trademark:11,tree:[12,13],trust:[1,4,5],tune:3,type:3,uefi:4,umask:12,unattend:5,under:[1,13],underli:13,unsaf:5,untrust:5,unusu:12,updat:[4,5],usag:5,user:[4,5],using:[5,7],valu:12,veriti:[1,4],version:13,virt:10,virtual:[4,5],virtualenv:7,wai:12,watch:[12,13],welcom:6,which:13,whole:12,whose:4,why:12,within:12,work:[4,11,13],write:5,xor:5,yet:4,you:12,your:[12,13]}})