Search.setIndex({docnames:["clipos/architecture","clipos/kernel","clipos/roadmap","clipos/secure_boot","clipos/security","index","toolkit/build","toolkit/contribute","toolkit/cosmk","toolkit/derive","toolkit/setup","toolkit/source-tree"],envversion:53,filenames:["clipos/architecture.rst","clipos/kernel.rst","clipos/roadmap.rst","clipos/secure_boot.rst","clipos/security.rst","index.rst","toolkit/build.rst","toolkit/contribute.rst","toolkit/cosmk.rst","toolkit/derive.rst","toolkit/setup.rst","toolkit/source-tree.rst"],objects:{"":{cosmk:[8,0,0,"-"]},"cosmk.__main__":{main:[8,1,1,""],sudo_ourselves:[8,1,1,""]},"cosmk.commons":{is_tty_attached:[8,1,1,""],line:[8,1,1,""],linux_version:[8,1,1,""],rewrap:[8,1,1,""],run:[8,1,1,""]},"cosmk.completion":{features_for_action:[8,1,1,""],product_completer:[8,1,1,""],recipe_completer:[8,1,1,""]},"cosmk.container":{Container:[8,2,1,""],ContainerDeviceBinding:[8,2,1,""],ContainerMountpoint:[8,2,1,""],ContainerSession:[8,2,1,""]},"cosmk.container.Container":{OCI_SPECS_VERSION:[8,3,1,""],RUNTIME_WORKING_DIR_REPO_SUBPATH:[8,3,1,""],mountpoints:[8,3,1,""],required_mountpoints:[8,3,1,""],run:[8,4,1,""],session:[8,4,1,""],unshared_namespaces:[8,3,1,""]},"cosmk.container.ContainerDeviceBinding":{as_dict:[8,4,1,""],cgroup_authorization_dict:[8,4,1,""]},"cosmk.container.ContainerMountpoint":{as_dict:[8,4,1,""]},"cosmk.container.ContainerSession":{run:[8,4,1,""],snapshot:[8,4,1,""]},"cosmk.exceptions":{ContainerSnapshotError:[8,5,1,""],CosmkEnvironmentError:[8,5,1,""],CosmkError:[8,5,1,""],InstrumentationSpecificationError:[8,5,1,""],ProductPropertiesError:[8,5,1,""],ProjectInRepoSourceTreeInUncleanState:[8,5,1,""],RecipeActionError:[8,5,1,""],RecipeConfigurationError:[8,5,1,""],RepoSourceTreeManifestParsingError:[8,5,1,""],SdkBootstrapError:[8,5,1,""],SdkError:[8,5,1,""],SdkNotFoundError:[8,5,1,""],SystemCommandError:[8,5,1,""],UnexpectedRepoSourceTreeStructure:[8,5,1,""],VirtualizedEnvironmentError:[8,5,1,""]},"cosmk.features":{RecipeBundleFeature:[8,2,1,""],RecipeConfigureFeature:[8,2,1,""],RecipeFeature:[8,2,1,""],RecipeRootFeature:[8,2,1,""],RecipeSdkFeature:[8,2,1,""],RecipeSignatureFeature:[8,2,1,""],RecipeVirtualizedEnvironmentFeature:[8,2,1,""]},"cosmk.features.RecipeBundleFeature":{FEATURED_ATTRIBUTES:[8,3,1,""],NAME:[8,3,1,""],SCHEMA:[8,3,1,""],bundle:[8,4,1,""]},"cosmk.features.RecipeConfigureFeature":{FEATURED_ATTRIBUTES:[8,3,1,""],NAME:[8,3,1,""],SCHEMA:[8,3,1,""],configure:[8,4,1,""]},"cosmk.features.RecipeFeature":{FEATURED_ATTRIBUTES:[8,3,1,""],NAME:[8,3,1,""],SCHEMA:[8,3,1,""],replace_placeholders:[8,4,1,""]},"cosmk.features.RecipeRootFeature":{FEATURED_ATTRIBUTES:[8,3,1,""],NAME:[8,3,1,""],SCHEMA:[8,3,1,""],build:[8,4,1,""],image:[8,4,1,""]},"cosmk.features.RecipeSdkFeature":{FEATURED_ATTRIBUTES:[8,3,1,""],NAME:[8,3,1,""],SCHEMA:[8,3,1,""],bootstrap:[8,4,1,""],run:[8,4,1,""],sdk:[8,3,1,""]},"cosmk.features.RecipeSignatureFeature":{NAME:[8,3,1,""]},"cosmk.features.RecipeVirtualizedEnvironmentFeature":{FEATURED_ATTRIBUTES:[8,3,1,""],NAME:[8,3,1,""],SCHEMA:[8,3,1,""],create:[8,4,1,""],destroy:[8,4,1,""],spawn:[8,4,1,""],virtualized_environment:[8,3,1,""]},"cosmk.fs":{LoopDevice:[8,2,1,""],OverlayfsMount:[8,2,1,""],SquashfsMount:[8,2,1,""],TmpfsMount:[8,2,1,""],close_loop:[8,1,1,""],loop_devices:[8,1,1,""],mksquashfs:[8,1,1,""],open_loop:[8,1,1,""]},"cosmk.healthcheck":{check_system:[8,1,1,""],healthcheck:[8,1,1,""]},"cosmk.instrumentation":{InstrumentationLevel:[8,2,1,""],instrumented_recipes:[8,1,1,""]},"cosmk.instrumentation.InstrumentationLevel":{DEBUG:[8,3,1,""],DEVELOPMENT:[8,3,1,""],PRODUCTION:[8,3,1,""]},"cosmk.log":{critical:[8,1,1,""],debug:[8,1,1,""],error:[8,1,1,""],info:[8,1,1,""],warn:[8,1,1,""]},"cosmk.mount":{Mountpoint:[8,2,1,""],mount:[8,1,1,""],mounts:[8,1,1,""],umount:[8,1,1,""]},"cosmk.privileges":{ElevatedPrivileges:[8,2,1,""],init_lower_privileges:[8,1,1,""]},"cosmk.privileges.ElevatedPrivileges":{possible:[8,6,1,""]},"cosmk.product":{Product:[8,2,1,""]},"cosmk.product.Product":{SCHEMA:[8,3,1,""],tainted_version:[8,3,1,""],validate_properties:[8,4,1,""],version:[8,3,1,""]},"cosmk.recipe":{Recipe:[8,2,1,""]},"cosmk.recipe.Recipe":{cache_subpath:[8,3,1,""],meta_schema:[8,3,1,""],out_subpath:[8,3,1,""],validate_metaconfig:[8,4,1,""]},"cosmk.sdk":{Sdk:[8,2,1,""],SdkSession:[8,2,1,""]},"cosmk.sdk.Sdk":{bootstrap:[8,4,1,""],container_mountpoints:[8,4,1,""],interactive_run:[8,4,1,""],session:[8,4,1,""]},"cosmk.sdk.SdkSession":{run:[8,4,1,""]},"cosmk.sourcetree":{CommentedTreeBuilder:[8,2,1,""],fix_output_nodes_ownerships:[8,1,1,""],is_repo_root:[8,1,1,""],repo_root_path:[8,1,1,""],snapshot_manifest:[8,1,1,""]},"cosmk.sourcetree.CommentedTreeBuilder":{comment:[8,4,1,""]},"cosmk.virt":{VirtualizedEnvironment:[8,2,1,""],guess_external_netiface_name:[8,1,1,""]},"cosmk.virt.VirtualizedEnvironment":{RUNTIME_WORKING_DIR_REPO_SUBPATH:[8,3,1,""],create:[8,4,1,""],destroy:[8,4,1,""],spawn_virt_manager_console:[8,4,1,""]},cosmk:{__main__:[8,0,0,"-"],commons:[8,0,0,"-"],completion:[8,0,0,"-"],container:[8,0,0,"-"],exceptions:[8,0,0,"-"],features:[8,0,0,"-"],fs:[8,0,0,"-"],healthcheck:[8,0,0,"-"],instrumentation:[8,0,0,"-"],log:[8,0,0,"-"],mount:[8,0,0,"-"],privileges:[8,0,0,"-"],product:[8,0,0,"-"],recipe:[8,0,0,"-"],sdk:[8,0,0,"-"],sourcetree:[8,0,0,"-"],virt:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","exception","Python exception"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:exception","6":"py:staticmethod"},terms:{"16gb":10,"20th":6,"50gb":10,"abstract":[8,10,11],"case":[1,2,5,8,11],"char":8,"class":[1,8,10],"default":[1,4,6,8,10],"enum":8,"export":6,"final":[4,8,11],"function":[1,4,8,10],"import":[1,2,6,8],"int":8,"long":[1,8],"new":[1,4],"null":[1,8],"public":[2,11],"return":[1,8],"short":[3,11],"static":[2,8],"super":[8,10],"true":[4,8],"try":[4,10],"var":[3,8],"while":[1,8,11],And:8,But:8,For:[1,4,6,7,10],LTS:2,NFS:4,NOT:11,Not:[2,4],One:0,RES:8,Such:[3,4],The:[0,1,3,4,5,6,8,10,11],Their:3,Then:10,These:[4,8,10,11],USE:[4,11],Use:[1,8],Using:1,VMs:1,abil:4,abl:[6,8,10],about:[1,4,5,9],abov:[1,3,4,8,10],accept:4,access:[1,2,6,8,10],account:11,achiev:4,act:8,action:[4,6,8],action_nam:8,action_targeted_recip:8,activ:[5,8],actual:[1,4],adapt:[4,5],add:[1,6,9],added:[1,2,11],addit:[1,2,4],additional_cap:8,additional_device_bind:8,address:1,admin:2,affect:[3,4],after:1,against:[1,4,8],alexand:1,alia:6,all:[0,1,2,3,4,6,8,11],alloc:[1,10],alloca:1,allow:[1,4,10,11],alpha:[4,5],alreadi:[1,11],also:[0,1,3,4,8,10,11],altern:[4,11],although:1,amd64:[4,10],amd:10,among:[1,6,10],amount:4,android:[2,4,10],ani:[1,4,6,8,9,10,11],annoi:11,anoth:[8,11],anssi:[4,9],anymor:1,anystr:8,anyth:11,anywai:1,aosp:10,api:[1,5,10],appear:8,append:[2,4],appli:[2,4,6,8,11],applic:[0,1,2],approach:1,appropri:[4,6,8,10],apt:10,arbitrari:1,arch:[8,10],architectur:[1,4,5],archiv:[4,8,10,11],area:1,arg:8,argcomplet:8,argpars:8,argument:8,argv:8,around:[1,8],as_dict:8,as_modul:8,aslr:1,assembl:[1,6],assess:4,asset:5,assign:4,assist:1,associ:6,assum:4,atom:[2,4],attach:8,attack:[1,4],attempt:[1,8],attent:[1,6],attest:2,attribut:[1,8],audit:[1,2],auditor:4,authent:2,author:[8,9],auto:8,autom:[1,3],automat:[2,3,6,8,10],avail:[0,1,6,8,11],avoid:[1,8,11],awar:4,back:[2,4,8,10],backfil:8,background:4,bad:[8,11],badli:8,bandwidth:10,base:[1,2,4,6,8,10,11],bash:[2,4,10],basic:[1,8,10],becaus:[8,11],been:[1,3,4,8,10],befor:[1,8,11],begin:10,behind:[4,11],being:[1,8],below:[1,4,8],benefit:1,best:1,beta:5,better:1,between:[0,1,2,11],binari:[0,1,2,3,4,5,8,10,11],bind:[2,8,10],binpkg:5,bit:[1,10],blacklist:1,blob:8,block:[1,8],bluetooth:4,bool:8,boot:[1,5,11],bootload:[0,2,4,6],bootstrap:[6,8,10,11],both:[1,2,4,8,10,11],bound:[2,4],bpf:[1,2,4],bpf_jit_harden:1,branch:[1,6,11],bridg:10,bring:11,brk:1,brought:[1,4],brows:4,browser:6,brute:1,buffer:1,bug:[1,2,4,7],build:[2,3,5,7,8,10],build_step:8,built:[1,8,11],bundl:[4,6,8],bundle_dir:8,buster:10,bypass:1,cach:[1,5,8],cache_subpath:8,cage:0,call:[0,1,6,8,11],caml:[2,4],can:[1,2,4,6,8,10,11],canari:1,cannot:[1,4,8],capabl:[2,4,10],captur:8,card:2,care:11,carefulli:[0,4],cargo:10,carri:1,caus:[1,8,10],certain:10,certifi:4,cgroup:[2,4,8,10],cgroup_authorization_dict:8,chang:[1,4,6,8,9,10,11],channel:[0,1],charact:11,charg:[8,11],check:[1,4,5,8,10],check_system:8,checkout:10,checksum:4,choic:1,choos:1,chose:1,chosen:4,chromeo:[2,4],cif:4,citat:1,claim:[1,4],clang:1,clash:1,clean:[4,6,8],clear:[4,6,8],clear_cach:8,clear_previous_build:8,cli:[8,11],client:[2,10],clip:[0,1,2,3,4,6,7,8,10,11],clipo:[1,5,6,7,8,10],clone:10,close:[4,8],close_loop:8,clutter:11,cmd:8,code:[1,3,7,8,10,11],coincid:4,com:[8,10],combin:4,command:[2,3,4,5,6,8,10,11],comment:8,commentedtreebuild:8,commit:[4,11],common:[1,10],commonli:1,commun:[0,2,4],comparison:11,compat:[10,11],compil:[4,5,11],complet:[1,4,6,11],complex:1,compli:8,compon:[1,3,4,5,6],compositor:[2,4],compress:8,compress_data_block:8,compress_extended_attribut:8,compress_fragment_block:8,compress_inode_t:8,compressor:8,compromis:1,concern:[4,8],concret:4,concurr:10,condit:1,conf:[4,10],confidenti:[0,3],config:[1,8,10],config_arch_mmap_rnd_bit:1,config_arch_random:1,config_audit:1,config_binfmt_misc:1,config_bug_on_data_corrupt:1,config_compat_brk:1,config_compat_vdso:1,config_coredump:1,config_crash_dump:1,config_debug_credenti:1,config_debug_f:1,config_debug_kernel:1,config_debug_list:1,config_debug_notifi:1,config_debug_sg:1,config_debug_virtu:1,config_debug_wx:1,config_default_mmap_min_addr:1,config_devkmem:1,config_devmem:1,config_devport:1,config_expert:1,config_fortify_sourc:1,config_fortify_source_strict_str:1,config_gcc_plugin:1,config_gcc_plugin_latent_entropi:1,config_gcc_plugin_randstruct:1,config_gcc_plugin_randstruct_perform:1,config_gcc_plugin_stackleak:1,config_gcc_plugin_structleak:1,config_gcc_plugin_structleak_byref_al:1,config_hardened_usercopi:1,config_hardened_usercopy_fallback:1,config_hibern:1,config_ikconfig:1,config_integr:1,config_intel_iommu:1,config_intel_iommu_default_on:1,config_intel_iommu_svm:1,config_intel_txt:1,config_io_strict_devmem:1,config_iommu_support:1,config_kallsym:1,config_kexec:1,config_kexec_fil:1,config_ksm:1,config_legacy_pti:1,config_legacy_vsyscall_non:1,config_local_init:1,config_lock_down_kernel:1,config_lock_down_mandatori:1,config_magic_sysrq:1,config_microcod:1,config_modify_ldt_syscal:1,config_module_sig:1,config_module_sig_al:1,config_module_sig_forc:1,config_module_sig_hash:1,config_module_sig_sha512:1,config_mtrr:1,config_page_poison:1,config_page_poisoning_zero:1,config_page_sanit:1,config_page_sanitize_verifi:1,config_page_table_isol:1,config_panic_on_oop:1,config_panic_timeout:1,config_proc_kcor:1,config_random_trust_cpu:1,config_randomize_bas:1,config_randomize_memori:1,config_refcount_ful:1,config_retpolin:1,config_sched_stack_end_check:1,config_seccomp:1,config_seccomp_filt:1,config_secur:1,config_security_dmesg_restrict:1,config_security_perf_events_restrict:1,config_security_selinux:1,config_security_selinux_bootparam:1,config_security_selinux_develop:1,config_security_selinux_dis:1,config_security_tiocsti_restrict:1,config_security_yama:1,config_slab_canari:1,config_slab_freelist_harden:1,config_slab_freelist_random:1,config_slab_harden:1,config_slab_merge_default:1,config_slab_sanit:1,config_slab_sanitize_verifi:1,config_slub_debug:1,config_slub_debug_on:1,config_stackleak_metr:1,config_stackleak_runtime_dis:1,config_stackleak_track_min_s:1,config_stackprotector:1,config_stackprotector_strong:1,config_static_usermodehelp:1,config_strict_devmem:1,config_strict_kernel_rwx:1,config_strict_module_rwx:1,config_syn_cooki:1,config_tcg_tpm:1,config_user_n:1,config_vmap_stack:1,config_x86_intel_memory_protection_kei:1,config_x86_intel_mpx:1,config_x86_intel_umip:1,config_x86_msr:1,config_x86_pat:1,config_x86_smap:1,config_x86_vsyscall_emul:1,configur:[2,4,5,6,8],confin:[0,4],congratul:10,connect:[2,4,8],consequ:[4,9,10],consid:[1,4],consol:[2,8],constrain:[4,11],construct:[8,11],consum:11,contain:[1,3,4,6,11],container:10,container_devic:8,container_mountpoint:8,container_sess:8,containerdevicebind:8,containermountpoint:8,containersess:8,containersnapshoterror:8,content:[1,6,8,10],context:[8,10,11],contextu:8,continu:[10,11],contrib:10,contribu:5,contribut:5,control:[0,1,2],controversi:1,copi:[1,6,8],core:[0,1,3,5,8],correctli:[1,10],correspond:[4,8,11],cosmk:[5,6,10],cosmkenvironmenterror:8,cosmkerror:8,could:[1,8,11],count:1,counter:1,coupl:8,cover:1,coverag:1,cpu:1,cpython:10,crash:1,crate:5,creat:[1,4,6,8,10,11],creation:[8,11],credenti:[2,4],critic:8,crng:1,cross:10,crosvm:4,crush:[2,4],crypt:[2,4],cryptograph:[1,4],current:[1,3,4,5,6,7,8,10],custom:1,cut:1,cwd:8,daemon:[2,10],dai:6,danger:1,data:[1,8],debian:[5,10],debootstrap:10,debug:[1,8,11],debugf:1,decid:1,decrypt:[2,4],dedic:[4,8,11],default_security_dac:1,defeat:1,defens:1,defin:8,definit:8,deni:10,deny_new_usb:1,depend:[4,5,8,11],deploi:[6,11],deploy:[1,3,6],deprec:1,depth:1,deriv:[4,5,8,11],describ:[1,6,8,11],design:[1,9],desktop:[2,4],destin:8,destroi:8,destroy_preexist:8,detail:[1,4,11],detect:[1,4,8],detect_sparse_fil:8,determin:5,dev:[1,8,10],devel:10,develop:[1,3,5,6,8,10,11],devic:[8,11],device_sidechannel_restrict:1,dict:8,differ:[1,2,3,4],diod:[2,4],direct:[0,1,4],directli:[6,8,10,11],directori:[4,6,8,10],disabl:[1,4,6],disallow:1,discard:4,discret:4,discuss:1,disk:[1,6,8,11],displai:[2,4],distfil:5,distinct:[4,10],distribut:[5,6],dma:1,dmesg:1,dmesg_restrict:1,dnf:10,dnsmasq:10,doc:[5,6],docker:10,docroot:[5,6],document:[0,1,4,10,11],doe:[1,6,8,9,10,11],doing:8,domain:8,done:8,download:[4,10],downstream:[9,11],draft:4,drive:2,driver:4,drop:[1,8],due:[1,10,11],dummi:[3,8],dump:1,duplex:8,duplic:8,dure:[1,4,6,8,11],dynam:2,each:[0,1,2,4,6,7,11],earli:4,eas:1,easier:1,easili:[8,10,11],ebtabl:10,ebuild:[4,11],eclass:11,edit:[2,10],effect:[8,10],effort:4,efi:[0,1,2,3,4,5,11],efiboot:[4,6],egid:8,either:[1,4,8,10,11],element:8,elementtre:8,elev:[4,8,10],elevatedprivileg:[8,10],elf:1,emb:10,emerg:11,emplac:2,enabl:[1,4,5,6,8],enclos:11,encount:10,encrypt:[1,2,4],end:[1,11],enforc:[1,2,4],engin:10,enhanc:8,enough:[1,10],enrol:[3,4],ensur:[1,4,8,10],entir:[1,4,5,11],entiti:0,entri:8,entropi:[1,2],enumer:8,env:8,environ:[0,5,8,11],ephemer:[1,8,10],equal:8,equival:1,eras:[1,11],error:[8,10],escap:8,escrow:[2,4],esp:3,essenti:10,etc:[2,4,6,8,10],eth:8,ethernet:8,etre:8,euid:8,evalu:8,even:[1,10],eventhough:8,eventu:[1,8],everi:4,everyth:[2,6,8,10],evil:4,evolv:2,examin:4,exampl:[4,6],except:[2,11],exclud:11,exclus:[1,4],execut:[0,3,6,8,11],execv:8,exhaust:[1,4],exist:[1,8],exit:8,expect:[2,3,8,10,11],experi:11,explain:8,explan:1,explicit:8,explicitli:1,exploit:1,expos:[10,11],extend:[1,8,9],extens:[1,4,9,10],extent:8,extern:[1,4,5,8,10],extra:1,extra_latent_entropi:1,extract:1,fact:[8,10],facult:8,fail:[1,8],failur:[2,4,8,10],fallback:[2,4],fals:8,famou:8,fast:1,faster:10,featur:[4,5,10,11],featured_attribut:8,features_for_act:8,fedora:[3,10],fetch:[5,6,11],fido:4,fifo:1,fig:0,file:[2,3,4,6,8,10],filesystem:[6,8,10,11],fill:1,filter:[4,8],find:1,find_dupl:8,fine:[1,4],finer:1,firmwar:[2,3,4,8],first:[4,5,8,9],fit:10,fix:[1,2,6,10],fix_output_nodes_ownership:8,flag:[4,8,11],flash:2,flatpak:[2,4],flatten:8,flip:8,flow:0,flush:1,focu:1,folder:[2,6,11],follow:[1,4,10],foral:[10,11],forbidden:0,forc:1,form:[1,8,11],format:8,fortify_sourc:1,forward:[4,8,11],found:[4,8,11],fragment:8,free:[1,8,10],freelist:1,french:[4,9],from:[0,1,2,6,8,9,10,11],fsanit:1,fstack:1,full:[1,8,11],fulli:1,further:1,fuse:4,futur:[1,8,9],gadget:1,gain:10,gather:1,gcc:1,gcc_plugin_latent_entropi:1,gener:[2,3],gentoo:[2,5,6,10],get:[8,11],gid:8,gigabyt:10,gir1:10,gitconfig:10,github:[4,7,8,10,11],gitlab:4,give:[8,11],given:[1,3,4,8,11],global:[5,8],gnu:11,gnupg2:10,gnupg:10,goe:0,good:[4,11],gouv:7,grain:1,grant:2,granular:1,graphic:0,greater:8,group:10,grsecur:1,guarante:[1,3,4],guard:1,guess:8,guess_external_netiface_nam:8,guest:1,guid:[4,5,11],gzip:8,handi:11,handl:[1,8],hard:[1,3],harden:[1,2,6],harder:1,hardwar:[0,1,5,10],has:[1,4,8,9,10,11],hash:[3,4],hassl:8,have:[1,3,4,6,7,8,10,11],header:10,heap:1,help:[1,10],helper:[6,8,10,11],here:[1,4,10,11],hide:1,hierarchi:11,high:0,higher:1,histori:[5,10],hold:[4,10,11],homepag:5,hook:[1,8,10],host:[0,2,4,8,11],host_devic:8,hostnam:8,hous:11,howev:[1,3,4,10,11],http:[8,10],hypervisor:1,hypothes:5,hypothet:11,idea:11,ident:[4,11],identifi:[8,9],ifi:8,ignor:2,imag:[1,3,4,5,8,10],image_step:8,immedi:1,immut:4,impact:1,implement:[1,4,8,10,11],impos:1,imposs:4,improv:[1,2],inaccur:8,includ:[1,2,3,4,6,8,10,11],inclus:2,incoher:8,incorpor:1,increas:1,inde:1,indent:8,independ:[2,8],info:8,inform:[1,9,10],infrastructur:[1,4,7,11],init:[1,10],init_lower_privileg:8,initi:[0,1,3,4,5,8],initramf:[1,2,3,4],inject:1,inod:8,input:4,insid:[4,6,8],inspir:[2,4],instal:[2,3,5,11],instanc:[4,8],instanci:8,instead:1,instruct:[1,4,5,10,11],instrument:[1,5],instrumentationlevel:8,instrumentationspecificationerror:8,instrumented_recip:8,insur:4,intefac:8,integr:[1,3,5,11],intel:[1,4,10],intend:[1,8,10,11],intention:11,inter:[0,2,4],interact:[2,4,5,8,11],interactive_run:8,interest:1,interfac:[1,8],interlac:[8,10],intermedi:6,intern:[10,11],interpret:[1,2,4],intevent:8,intra:[1,2,4],intreset:10,introduc:11,intrus:4,invalid:1,invers:1,invok:8,involv:4,ioctl:1,iommu:[1,4],ipsec:[2,4],ipv4:1,ipv6:1,is_repo_root:8,is_tty_attach:8,isol:[0,1,2],issu:[6,7,8,10],item:[1,11],iter:[6,8],its:[1,3,4,5,6,8,10,11],itself:[1,4,8],jail:11,jit:1,job:[1,10],join:8,journal:2,journald:4,json:8,jump:10,just:[1,6,8,10,11],justfil:[5,6,10],justifi:4,kaslr:1,keep:[1,4,6,8,10],kei:[1,2,3,4,8],kek:3,kept:8,kernel:[3,5,6,8,10,11],kexec:[1,4],keyr:10,kind:[8,11],know:5,known:[2,4,10],kpti:1,kptr_restrict:1,kvm:[1,2,4,6,10],kwarg:8,l1tf:1,lack:11,languag:10,laptop:2,larg:[10,11],last:11,latent:1,later:[4,10],latest:2,launch:[8,10,11],layer:[1,10],layout:1,lead:[8,10],leak:1,leakag:1,least:[1,10],left:10,legal:11,len:8,lesser:11,level:[0,1,5,6,8],leverag:1,lfs:10,lgpl:9,libc:1,libguestf:6,librari:10,libvirt:[6,8,10],libvirt_domain_xml_templ:8,libvirt_network_xml_templ:8,licens:[5,9],lifecycl:4,lifetim:4,like:[4,8,10],limit:[1,8,11],line:[2,3,4,5,8,10],link:[1,4],linux:[1,5,8],linux_vers:8,list:[1,2,4,6,8,10],littl:1,live:8,load:[1,4],loadabl:1,local:[1,2,4,8],locat:[1,8,11],lock:[2,4],lockdown:1,log:[1,2,4,6],logic:[0,4,8,11],look:11,loop:8,loop_devic:8,loopback:8,loopdevic:8,losetup:[8,10],lot:[4,10],lower:[8,10],lowerdir:8,lsm:[1,2,4],luk:4,luks2:2,machin:[1,3,4,6,8,10,11],made:[1,4,6,8,10],mai:[0,1,4,6,7,8,9,10,11],maid:4,mail:7,main:[1,3,5,6,8,11],mainli:[4,6],mainlin:1,maintain:[1,4,9],mainten:4,major:10,make:[1,3,4,8,11],makefil:10,man:4,manag:[2,8,10,11],mandatori:2,mani:1,manifest:[4,5,8,10],manipul:[6,8],manner:8,manual:[3,4,6],manufactur:[1,3],map:1,mark:1,master:8,match:[8,11],matter:11,maxim:1,maximum:1,mean:8,meant:[8,11],measur:[2,4],mechan:[1,4,8],mediat:0,medium:8,meet:[4,8,11],meltdown:1,mem:1,memori:[1,10],mention:[1,3],merg:[1,2],mergeddir:8,messag:8,met:4,meta:8,meta_schema:8,metaclass:8,metadata:1,method:[4,6,8,10],microcod:1,microphon:2,might:[1,8,10,11],mileston:5,mind:1,mindirect:1,minim:[1,4,11],minimum:10,minut:10,mirror:[4,11],miscellan:[1,8],miss:[8,10,11],mitig:[1,4],mix:1,mkdir:10,mksquashf:[8,10],mmap:1,mmu:4,mnt:8,mode:[1,10,11],model:1,modern:1,modifi:[6,9,11],modul:[1,4,6,11],modules_dis:1,moment:[1,3],more:[1,4,5,9],most:[1,2,4,6,8,11],mostli:4,mount:[1,2,4,10],mountpoint:8,msg:8,msr:1,mtrr:1,much:1,multi:5,multilib:4,multipl:[1,2,6,8,10],must:[1,4,6,8,10,11],myusernam:10,name:[4,8,9,10,11],namespac:[1,2,4,8,10],necessari:3,need:[1,3,6,8,11],nemu:4,net:1,network:[8,10],never:8,newli:1,next:2,nightli:[4,11],no_new_priv:4,no_snapshot_group:8,node:[8,11],nodev:[10,11],noexec:[4,10,11],non:[1,8],none:8,nosuid:[4,11],note:[1,3,4,8],now:[0,1,7,10],nowadai:1,number:[1,11],o_mayexec:2,object:[5,8,11],obtain:1,occas:10,occur:8,oci:[8,10],oci_specs_vers:8,off:1,offlin:[4,11],often:11,onc:[1,4,6,11],one:[1,4,8,10,11],ones:1,onli:[1,2,4,6,8,10,11],onlin:9,onto:8,open:[1,4,5,6,8,10],open_loop:8,opencontain:8,openssh:10,oper:[1,8,10,11],opposit:11,optim:3,option:[2,4,8],order:[1,3,4,6,8],organ:5,organiz:11,origin:[1,8,9,10],other:[0,1,2,6,8,11],otherwis:[1,10,11],our:[1,11],out:[1,4,5,6,8],out_subpath:8,output:[6,8,10,11],outsid:8,over:[2,4,8,9],overal:11,overflow:[1,8],overlai:4,overlayf:[8,10],overlayfsmount:8,overli:8,overridden:1,overview:0,overwritten:[1,8],ovmf:[3,8],ovmf_cod:8,ovmf_firmware_cod:8,ovmf_firmware_vars_templ:8,ovmf_vars_templ:8,own:[1,4,9],ownership:11,packag:[4,5,8,10,11],pacman:10,page:[1,4,6,10,11],page_poison:1,pai:6,pam:2,panel:[2,4],panick:1,paramet:[4,5,8],paravirtu:4,pars:8,parsed_arg:8,part:[1,4,8,10,11],parti:4,particular:1,particularli:1,partit:[1,3,4,5],pass:[1,4,8],password:[2,4,6,8],past:1,patch:[1,2,7,11],path:[6,8,11],pax:1,pep:8,per:4,perf_event_open:1,perf_event_paranoid:1,perform:[1,3,8],peripher:2,perl:2,perman:2,permiss:[1,4,10],permit:10,persist:1,pgp:4,phase:4,physic:[1,4],pid:[1,4],pid_max:1,pkg:10,pki:3,place:1,placehold:8,plai:1,plan:[1,5,10],platform:[2,4,5,10],pleas:[1,4,5,6,7,8,10],plugin:1,point:[1,8,10,11],pointer:[1,4],pointless:11,poison:1,popov:1,popul:11,port:[1,2],portag:[1,2,4,5,6,10],portion:1,posit:1,possibl:[1,3,8],post:9,postlude_command:8,potenti:[1,8,11],practis:11,pre:2,preciou:1,preclud:9,predefin:1,prefer:[1,4],prefix:8,prelude_command:8,present:[1,8,11],prevent:[1,8,11],preview:5,previou:[1,8],primarili:8,primit:[1,4],principl:1,printer:2,prioriti:4,privileg:[1,4,6,10],probabl:1,probe:8,problemat:11,proc:[1,8],process:[1,4,6,8,10],procf:1,produc:[8,11],product:[1,5,6],product_complet:8,productpropertieserror:8,products_clipo:11,profil:11,program:[1,4,10],progress:4,project:[2,4,6,7,8,10,11],projectinreposourcetreeinuncleanst:8,promis:1,prop_dict:8,properli:[2,4,6,8,11],properti:[5,8],propos:8,proprietari:2,protect:[1,3,4],protected_fifo:1,protected_hardlink:1,protected_regular:1,protected_symlink:1,protector:1,protocol:4,provid:[1,6,8,10,11],proxi:4,pseudo:[1,8],pte:1,pti:1,ptmx:8,ptrace:1,ptrace_scop:1,pty:1,publicli:4,publish:9,pull:[7,10],punctual:10,pure:1,purpos:[1,8,10,11],pursu:8,pypi:11,python2:10,python3:10,python:[2,4,5,6,10,11],qa_strict_execstack:4,qa_strict_flags_ignor:4,qa_strict_multilib_path:4,qa_strict_prestrip:4,qa_strict_textrel:4,qa_strict_wx_load:4,qcow2:[6,8],qcow2_main_disk_imag:8,qemu:[1,2,4,5],question:7,quick:11,quotat:9,rais:8,ram:10,random:[1,8],rang:1,rather:11,rational:[4,11],rdrand:1,read:[1,2,4,8,10],readabl:10,readi:[8,10],readm:5,readonli:8,readonly_root:8,real:[1,5,8],realist:4,reason:[1,8,11],reboot:1,rebuild:[6,11],rebuilt:[2,6],recal:8,receiv:[8,11],recent:[1,10],recip:[4,5,6],recipe_complet:8,recipeactionerror:8,recipebundlefeatur:8,recipeconfigurationerror:8,recipeconfigurefeatur:8,recipefeatur:8,reciperootfeatur:8,recipesdkfeatur:8,recipesignaturefeatur:8,recipevirtualizedenvironmentfeatur:8,recommend:[1,4,8,10],recov:1,recoveri:2,red:1,redirect:8,reduc:[1,4],reduct:1,redund:1,refer:[1,4,5,10],referenc:[4,8],reflect:[8,11],refus:4,regard:[8,10],regardless:9,regex:8,region:4,regist:1,regular:1,rel:[8,10],relat:[1,8,10,11],releas:5,relev:[1,3],reli:[1,11],reliabl:1,reload:1,remain:[1,2],remot:[1,2,11],remov:[4,6,8],reorgan:8,replac:[4,8,10],replace_placehold:8,repo:[5,8],repo_root:11,repo_root_path:8,report:1,repositori:[4,6,7,10],reposourcetreemanifestparsingerror:8,reproduc:2,republ:[4,9],request:[7,8],requir:[0,1,2,5,6,8,11],required_mountpoint:8,reserv:4,reset:6,resid:4,resili:4,resourc:[1,4,11],respect:[1,8,11],respons:[0,1,3,8],restart:6,restrict:[1,10,11],result:[4,6,8,11],ret2usr:1,retain:8,retpolin:1,retriev:8,reus:6,reusabl:8,reveal:1,review:7,revis:[4,11],rewrap:8,right:8,risk:1,rng:[1,2],roadmap:[4,5],robust:1,rogu:1,role:1,rollback:4,root:[1,3,4,6,8],rootf:[6,8,10,11],rootfs_arch:8,rootkit:1,rop:1,rotat:[2,4],rout:8,run:[0,1,5,6,8],runc:8,runc_container_nam:8,runtim:[1,4,8,10,11],runtime_working_dir_repo_subpath:8,rust:[4,11],rustc:10,rustup:10,safe:[1,6,11],safeti:8,said:4,same:[1,4,8],sandbox:4,saniti:1,save:8,sbin:6,sbsigntool:3,scanner:2,scenario:[5,10],schema:8,scope:1,scratch:[6,11],screen:[2,4],script:[1,5,8,10],sdk:[4,5,10],sdk_context:8,sdk_debian:6,sdkbootstraperror:8,sdkerror:8,sdknotfounderror:8,sdksession:8,seal:[2,4],seamless:8,seccomp:[1,2,4],secret:[1,2,4],section:[1,6,8,10],secur:[5,8,11],see:[1,4,8,10],seem:[8,11],seen:1,select:[6,8],selinux:[1,2],send:7,sens:[1,8],sensit:1,separ:[0,1,11],septemb:6,sequenc:[10,11],seri:1,serv:[4,11],server:[2,4,10,11],servic:[0,4,5],session:[0,1,2,8],sesssion:8,set:[1,2,3,4,6,7,8,10,11],setuid:1,setup:[2,5,11],sever:[0,1,4,10],sha256:4,sha512:1,shall:[4,8],share:[1,4,8],shared_host_netn:8,shebang:1,shell:[8,10,11],ship:3,shortcut:8,should:[1,4,8,9,10,11],show:11,shown:0,side:[1,8],sign:[1,2,3,4,8],signatur:[2,4],signific:1,significantli:10,similar:[1,2,4],similarli:[1,3,6,10],simpl:[1,8,10],simpler:1,simpli:1,simplifi:8,sinc:[4,8,10,11],singl:[4,8],size:[1,2,10],skip:10,slab:1,slab_canari:1,slab_sanit:1,slab_sanitize_verifi:1,slash:11,slot:4,slub_debug:1,slub_nomerg:1,smartcard:[2,4],smt:1,snapshot:[8,11],snapshot_group:8,snapshot_manifest:8,socket:[2,4],softwar:[4,5,6,9],solut:3,some:[1,2,6,8,10,11],somedai:1,somewhat:4,sound:2,sourc:[1,5,6,8],source_dir:8,source_m:[6,11],space:[1,4,8,10],span:8,spars:8,spawn:[8,11],spawn_virt_manager_consol:8,spec:8,spec_store_bypass_dis:1,specif:[0,4,5,7,8,11],specifi:[8,11],spectr:1,spectre_v2:1,specul:1,speed:[6,11],speedup:6,sphinx:6,spiceclientglib:10,spiceclientgtk:10,split:[0,2,6,8,10],spoof:1,sprai:1,squashf:[4,8],squashfil:8,squashfs_fil:8,squashfs_filepath:8,squashfsmount:8,src:[1,4,5,10],src_external_supertool:11,ssh:[2,4],ssi:7,stabl:[5,10,11],stack:1,stackleak:1,stage3:[4,11],stage:[4,5,6],stand:1,standalon:10,standard:[4,8],start:[0,1,2,4,8,11],startup:[1,4],state:[2,4,8],stateful:4,statu:[2,4],stderr:8,stdin:8,stdout:8,stdouterr:8,step:[3,4,5,8,10,11],still:[1,2,5,6,8,10],storag:[2,4,10],store:[1,4,10,11],store_xattr:8,str:8,stream:8,stretch:10,strict:[1,4],stricter:4,strictli:4,string:8,strip:[8,11],strong:1,structleak:1,structur:[1,8,11],stub:3,stuff:8,sub:[0,8,10,11],subclass:8,subdirectori:6,subfold:11,submit:7,submodul:8,subprocess:8,subset:1,subsystem:1,success:[6,8],successfulli:[10,11],sudo:[6,8,10],sudo_gid:8,sudo_ourselv:8,sudo_uid:8,sudoer:[6,10],suffici:1,suggest:[4,8,9],suid:[2,4],suid_dump:1,suitabl:8,sujust:6,summari:5,super_tool:11,superus:1,supervisor:1,support:[4,5,6],suppos:1,surfac:[1,4],suspend:1,swap:[1,10],symbol:1,symlink:11,sync:10,synchon:11,syncooki:1,syntax:10,sys:[1,8],syscal:[1,8],sysctl:5,sysf:1,system:[3,5,8],systemcommanderror:8,systemd:[2,3,4],syu:10,tabl:[1,8],tailor:4,taint:8,tainted_vers:8,take:[8,10,11],taken:1,tamper:4,tangibl:11,tar:8,tarbal:4,target:[1,8,11],task:6,tcb:2,tcp:[1,4],techniqu:1,technolog:[1,4,10],tediou:4,templat:[3,8],temporari:[6,8],temporarili:8,term:[3,4,9],termin:8,test:[5,10],text:[4,8,11],than:[1,10,11],thank:1,theft:4,thei:[1,10,11],them:[1,4,8,11],therefor:[1,4,8,10,11],thi:[1,2,3,5,6,8],third:4,those:[0,4,6,8,10,11],though:[1,4],thought:4,threat:[1,5],three:[3,6],through:[0,1,2,3,4,8,10],throughout:10,thu:[1,4,11],thunk:1,tightli:1,time:[1,2,3,4,8,9,10,11],timeout:8,timer_entropyd:2,tiocsti:1,tiocsti_restrict:1,tip:10,tmpf:[8,10],tmpfsmount:8,toctou:1,todo:8,togeth:[1,10,11],token:4,toml:[6,8],tookit:5,tool:[2,5,6,8,10,11],toolkit:[4,5,8,10],tpm:[1,2,4],trade:1,trademark:4,tradit:8,trail:8,trait:8,transfer:2,transit:4,transport:4,travers:10,treat:8,tree:[4,5,6,8],treebuild:8,tri:[1,8],trigger:11,trivial:1,trust:1,tty:[1,8],tune:[4,5],tunnel:[2,4],tupl:8,tweak:11,two:[1,3,4,10],type:[4,8],typic:10,u2f:[2,4],ubuntu:10,uefi:[3,4,8],uid:8,ultim:1,umount:8,unattend:2,unavail:6,unchang:10,uncondit:1,undefin:10,under:[4,5,8,9,10,11],underli:8,underscor:11,understand:11,unexpect:[2,8],unexpectedreposourcetreestructur:8,unhandl:8,union:8,uniqu:8,unix:[2,4,8],unknown:8,unlock:[1,2,4],unmount:8,unneed:8,unpars:8,unpredict:4,unprivileg:[0,1,4,8,10],unprivileged_bpf_dis:1,unprivileged_userns_clon:1,unread:1,unsaf:8,unseal:[2,4],unshared_namespac:8,unstabl:10,unstag:8,unsupport:1,until:[2,11],untrust:1,updat:[1,6],upgrad:4,upon:4,upperdir:8,upstream:[1,2,6,11],uptim:4,urandom:8,usag:[8,10,11],usb:[1,2,4],usbguard:4,use:[1,3,4,5,6,8,9,10,11],use_branch:8,used:[1,4,8,10,11],useful:[1,10],user:[0,1,6,8,10],userfetch:4,userland:10,usernam:10,userpriv:4,usersandbox:4,userspac:[1,4],uses:[1,4,8],using:[1,2,3,6,8,10],usr:6,usual:[0,8,11],util:[6,8,10],valid:[1,2,4,8],validate_metaconfig:8,validate_properti:8,valu:[1,4,6,8],valueerror:8,variabl:[6,8],variant:1,variou:[1,6],vendor:[4,10],venv:10,veri:[1,4],veriexec:2,verif:4,verifi:[1,3,8],veriti:[3,4],versa:8,version:[1,2,4,5,8,9,10],via:[1,3,10],vice:8,virt:10,virtio:[2,4],virtual:[1,3,6,8,10,11],virtual_machin:8,virtualenv:11,virtualized_environ:8,virtualizedenviron:8,virtualizedenvironmenterror:8,vital:8,vmx:1,volum:4,voluntarili:1,vserver:[2,4],vsock:4,vsyscal:1,vulner:1,wai:[1,3,4,9,11],walk:10,want:[1,6,10,11],warn:[1,8],wayland:[2,4],weaken:1,web:4,webcam:2,well:[4,8,10],were:1,what:[3,8],wheel:11,when:[1,6,8,10],where:[1,8,10,11],whether:8,which:[1,3,4,6,8,10],whitelist:[1,4],whitespac:8,whole:[4,8,11],whose:[1,5,8,10],why:[1,8],wide:4,wireless:[4,8],wish:5,within:[4,8,11],without:[1,6,8,10,11],won:11,word:[1,8,11],work:[1,6,8,10],workaround:6,workdir:8,workstat:[4,6,11],worth:1,would:[1,3,4,8],wrap:8,wrapper:8,writabl:[1,4],writable_assets_dirs_at_build:8,writable_repo_root:8,write:[1,2,8],written:4,x86:[1,4,10],x86_64:[1,10],xml:8,xml_domain_templ:8,xml_network_templ:8,xxx:8,yama:1,yet:[1,4,5,8,10],you:[1,5,6,7,9,11],your:[1,5,6,9],zero:[1,8],zone:1},titles:["Architecture","Kernel","Roadmap","Secure Boot support","Security objectives","Welcome to the CLIP OS project documentation!","Building","How to contribute","<code class=\"docutils literal notranslate\"><span class=\"pre\">cosmk</span></code> Python API reference","How to derive this project","Environment setup","Source tree organization"],titleterms:{"case":[4,10],"default":2,"function":6,"while":10,LFS:[4,10,11],__main__:8,about:[10,11],access:4,acpi:1,action:11,activ:6,add:11,administr:[2,4],afford:4,all:10,alpha:2,altern:10,api:8,applic:4,arbitrari:[2,4],architectur:[0,2,10],asset:[4,11],assign:2,assist:4,attest:4,authent:4,automat:4,avail:[2,4],avoid:10,awar:2,back:11,backup:4,befor:[6,10],below:11,beta:2,binari:6,binpkg:11,bit:4,boot:[2,3,4,6],bootup:4,build:[4,6,11],built:[4,6],bundl:11,cach:[6,11],certif:4,chain:[2,4],check:11,clip:[5,9],clipo:11,code:[2,4],command:1,common:[4,8],compil:[1,2,10],complet:8,compon:0,compromis:4,confidenti:[2,4],configur:[1,10,11],confin:2,contain:[8,10],content:[4,11],continu:6,contribut:7,control:4,conveni:10,core:[4,6,11],cosmk:[8,11],crate:11,criteria:4,current:11,custom:[4,11],data:[2,4],debian:[6,11],depend:10,deploy:4,deriv:9,determin:2,develop:[2,4],devic:[1,2,4,10],directori:11,disk:4,distfil:[4,11],distribut:10,doc:11,docroot:11,document:[5,6],done:10,driver:1,efi:6,efiboot:11,emul:1,enabl:[2,10],ensur:6,entir:10,environ:[2,4,6,10],evalu:4,eventu:4,exact:4,exampl:11,except:[4,8],execut:[1,2,4],exhaust:11,extern:11,featur:[1,2,8],fetch:10,file:[1,11],filesystem:4,filter:10,firewal:2,first:[2,11],fleet:4,forgot:10,format:1,from:4,full:4,further:6,gener:1,gentoo:[4,11],get:[5,6,10],git:[4,10,11],global:10,going:6,graphic:[2,4],hack:1,harden:4,hardwar:[2,3,4],healthcheck:8,host:10,how:[5,7,9,10,11],hypothes:4,imag:[6,11],impact:4,infrastructur:[6,10],inher:4,initi:2,instal:[4,10],instrument:[6,8],integr:[2,4,6],interact:0,interfac:4,isol:4,issu:4,journal:4,justfil:11,kernel:[1,2,4],languag:4,layout:2,level:[2,4],licens:11,limit:4,line:1,linux:[2,4,10,11],log:8,loop:10,main:2,make:10,manag:[1,4],mandatori:4,manifest:11,memori:4,mess:11,mileston:2,mode:4,model:[2,4],modul:8,more:10,mount:[8,11],multi:[2,4],necessari:10,need:10,network:[1,4],nomenclatur:11,non:[2,4,11],notabl:11,object:[1,4],open:2,oper:4,option:[1,11],organ:11,origin:[4,11],other:[4,10],out:[10,11],overlai:11,packag:6,paramet:1,parti:11,partit:[2,6,11],perform:4,persist:4,plan:2,platform:11,portag:11,power:1,pre:6,preview:2,principl:4,privileg:8,processor:1,product:[8,11],profil:4,progress:[2,9],project:[5,9],properti:[3,4],provid:4,provis:4,python:8,qemu:[3,6,10],quicker:10,readm:11,real:3,recip:[8,11],recoveri:4,refer:8,relat:4,releas:2,remot:4,repo:[10,11],repositori:11,represent:11,reproduc:4,requir:[4,10],restrict:[2,4],roadmap:2,robust:[2,4],role:[2,4],root:[2,10,11],rule:2,run:[10,11],runc:10,rust:10,safe:4,scenario:4,script:11,sdk:[6,8,11],secur:[1,2,3,4],separ:4,servic:2,session:4,setup:[1,3,4,6,10],softwar:[2,10],sourc:[2,4,10,11],sourcetre:8,squashf:10,src:11,stabl:2,start:5,statu:5,step:6,sub:4,subdirectori:11,summari:4,support:[1,2,3,10],sure:10,synchron:10,sysctl:1,system:[0,1,2,4,10],systemd:11,test:[3,6],thi:[4,9,10,11],third:11,threat:4,tookit:11,toolkit:[6,11],track:4,trademark:9,tree:[10,11],trust:[2,4],tune:1,type:1,uefi:2,umask:10,unattend:4,under:3,underli:11,unsaf:4,untrust:4,unusu:10,updat:[2,4],usag:4,user:[2,4],using:4,valu:10,veriti:2,version:11,virt:8,virtual:[2,4],wai:10,watch:[10,11],welcom:5,which:11,whole:10,whose:2,why:10,within:10,work:[2,9,11],write:4,xor:4,yet:2,you:10,your:[10,11]}})