(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4893],{69316:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/nodes/run-dijets-node-with-google-cloud",function(){return t(84356)}])},84356:function(e,n,t){"use strict";t.r(n),t.d(n,{Page:function(){return l},meta:function(){return s}});var i=t(52322),o=t(3905),r=t(72499),s={id:"nodes-run-dijets-node-with-google-cloud",title:"Run a Dijets Node with Google Cloud Services",description:"How to configure and run a Dijets Node on Google Cloud"},l=function(e){var n=e.children;return(0,i.jsx)(r.Z,{meta:s,children:n})},a=l;function c(e){var n=Object.assign({p:"p",a:"a",strong:"strong",code:"code",h3:"h3",ul:"ul",li:"li",h4:"h4",h2:"h2",ol:"ol"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Google's Cloud Platform (GCP) is a scalable, trusted and reliable hosting\nplatform. Google operates a significant amount of it's own global networking\ninfrastructure. It's ",(0,i.jsx)(n.a,{href:"https://cloud.google.com/blog/products/networking/google-cloud-networking-in-depth-cloud-cdn",children:"fiber\nnetwork"}),"\nis ",(0,i.jsx)(n.strong,{children:"huge"})," and it can provide highly stable and consistent global connectivity.\nIn this article we will leverage GCP to deploy a node on which Dijets can\ninstalled via ",(0,i.jsx)(n.a,{href:"https://www.terraform.io/",children:"terraform"}),". Leveraging ",(0,i.jsx)(n.code,{children:"terraform"})," may\nseem like overkill, but speaking as someone who has managed extremely large\ncompute estates for over a decade I believe it will set you apart as an operator\nand administrator as it will enable you greater flexibility and provide the\nbasis on which you can easily build further automation."]}),"\n",(0,i.jsx)(n.h3,{id:"conventions",children:"Conventions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Items"})," highlighted in this manner are GCP parlance and can be searched for\nfurther reference in the Google documentation for their cloud products."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"important-notes",children:"Important Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The machine type used in this documentation is for reference only and the\nactual sizing you use will depend entirely upon the amount that is staked and\ndelegated to the node."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"architectural-description",children:"Architectural Description"}),"\n",(0,i.jsx)(n.p,{children:"This section aims to describe the architecture of the system that the steps in\nthe Setup Instructions section deploy when enacted. This\nis done so that the executor can not only deploy the reference architecture, but\nalso understand and potentially optimise it for their needs."}),"\n",(0,i.jsx)(n.h3,{id:"project",children:"Project"}),"\n",(0,i.jsxs)(n.p,{children:["We will create and utilise a single GCP ",(0,i.jsx)(n.code,{children:"Project"})," for deployment of all resources."]}),"\n",(0,i.jsx)(n.h4,{id:"service-enablement",children:"Service Enablement"}),"\n",(0,i.jsx)(n.p,{children:"Within our GCP project we will need to enable the following Cloud Services:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Compute Engine"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"IAP"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"networking",children:"Networking"}),"\n",(0,i.jsx)(n.h4,{id:"compute-network",children:"Compute Network"}),"\n",(0,i.jsxs)(n.p,{children:["We will deploy a single ",(0,i.jsx)(n.code,{children:"Compute Network"})," object. This unit is where we will\ndeploy all subsequent networking objects. It provides a logical boundary and\nsecuritization context should you wish to deploy other chain stacks or other\ninfrastructure in GCP."]}),"\n",(0,i.jsx)(n.h4,{id:"public-ip",children:"Public IP"}),"\n",(0,i.jsxs)(n.p,{children:["Dijets requires that a validator communicate outbound on the same public IP\naddress that it advertises for other peers to connect to it on. Within GCP this\nprecludes the possibility of us using a Cloud NAT Router for the outbound\ncommunications and requires us to bind the public IP that we provision to the\ninterface of the machine. We will provision a single ",(0,i.jsx)(n.code,{children:"EXTERNAL"})," static IPv4\n",(0,i.jsx)(n.code,{children:"Compute Address"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"subnetworks",children:"Subnetworks"}),"\n",(0,i.jsxs)(n.p,{children:["For the purposes of this documentation we will deploy a single ",(0,i.jsx)(n.code,{children:"Compute Subnetwork "}),"in the US-EAST1",(0,i.jsx)(n.code,{children:" Region"})," with a 24 address range giving us 254 IP\naddresses."]}),"\n",(0,i.jsx)(n.h4,{id:"disk",children:"Disk"}),"\n",(0,i.jsxs)(n.p,{children:["We will provision a single 400GB ",(0,i.jsx)(n.code,{children:"PD-SSD"})," disk that will be attached to our VM."]}),"\n",(0,i.jsx)(n.h4,{id:"instance",children:"Instance"}),"\n",(0,i.jsxs)(n.p,{children:["We will deploy a single ",(0,i.jsx)(n.code,{children:"Compute Instance"})," of size ",(0,i.jsx)(n.code,{children:"e2-standard-8"}),". Observations\nof operations using this machine specification suggest it is memory over\nprovisioned and could be brought down to 16GB using custom machine\nspecification; but please review and adjust as needed (the beauty of compute\nvirtualization!!)."]}),"\n",(0,i.jsx)(n.h4,{id:"zone",children:"Zone"}),"\n",(0,i.jsxs)(n.p,{children:["We will deploy our instance into the ",(0,i.jsx)(n.code,{children:"US-EAST1-B"})," ",(0,i.jsx)(n.code,{children:"Zone"})]}),"\n",(0,i.jsx)(n.h4,{id:"firewall",children:"Firewall"}),"\n",(0,i.jsxs)(n.p,{children:["We will provision the following ",(0,i.jsx)(n.code,{children:"Compute Firewall"})," rules:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IAP INGRESS for SSH (TCP 22) - this only allows GCP IAP sources inbound on SSH."}),"\n",(0,i.jsx)(n.li,{children:"P2P INGRESS for DJTX Peers (TCP 9651)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These are obviously just default ports and can be tailored to your needs as you see fit."}),"\n",(0,i.jsx)(n.h2,{id:"setup-instructions",children:"Setup Instructions"}),"\n",(0,i.jsx)(n.h3,{id:"gcp-account",children:"GCP Account"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["If you don't already have a GCP account go create one ",(0,i.jsx)(n.a,{href:"https://console.cloud.google.com/freetrial",children:"here"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You will get some free credit to run a trial, the trial is feature complete but\nyour usage will start to deplete your free trial credit so turn off anything you don't\nneed and/or add a credit card to your account if you intend to run things long\nterm to avoid service shutdowns."}),"\n",(0,i.jsx)(n.h3,{id:"project-1",children:"Project"}),"\n",(0,i.jsxs)(n.p,{children:["Login to the GCP ",(0,i.jsx)(n.code,{children:"Cloud Console"})," and create a new ",(0,i.jsx)(n.code,{children:"Project"})," in your\norganization. Let's use the name ",(0,i.jsx)(n.code,{children:"my-dijets-nodes"})," for the sake of this setup."]}),"\n",(0,i.jsx)(n.h3,{id:"terraform-state",children:"Terraform State"}),"\n",(0,i.jsx)(n.p,{children:"Terraform uses state files to compose a differential between current\ninfrastructure configuration and the proposed plan. You can store this state in\na variety of different places, but using GCP storage is a reasonable approach\ngiven where we are deploying so we will stick with that."}),"\n",(0,i.jsxs)(n.p,{children:["Authentication to GCP from terraform has a few different options which are laid\nout ",(0,i.jsx)(n.a,{href:"https://www.terraform.io/language/settings/backends/gcs",children:"here"}),". Please\nchose the option that aligns with your context and ensure those steps are\ncompleted before continuing."]}),"\n",(0,i.jsx)(n.h3,{id:"clone-github-repository",children:"Clone GitHub Repository"}),"\n",(0,i.jsxs)(n.p,{children:["We have have provided a rudimentary terraform construct to provision a node on which\nto run Dijets which can be found\n",(0,i.jsx)(n.a,{href:"https://github.com/Dijets-Inc/dijets-terraform-construct",children:"here"}),".\nDocumentation below assumes you are using this repository but if you have\nanother terraform skeleton similar steps will apply."]}),"\n",(0,i.jsx)(n.h3,{id:"terraform-configuration",children:"Terraform Configuration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["If running terraform locally, please\n",(0,i.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"install"})," it."]}),"\n",(0,i.jsxs)(n.li,{children:["In this repository, navigate to the ",(0,i.jsx)(n.code,{children:"terraform"})," directory."]}),"\n",(0,i.jsxs)(n.li,{children:["Under the ",(0,i.jsx)(n.code,{children:"projects"})," directory, rename the ",(0,i.jsx)(n.code,{children:"my-dijets-project"})," directory to\nmatch your GCP project name that you created (not required, but nice to be\nconsistent)"]}),"\n",(0,i.jsxs)(n.li,{children:["Under the folder you just renamed locate the ",(0,i.jsx)(n.code,{children:"terraform.tfvars"})," file."]}),"\n",(0,i.jsx)(n.li,{children:"Edit this file and populate it with the values which make sense for your\ncontext and save it."}),"\n",(0,i.jsxs)(n.li,{children:["Locate the ",(0,i.jsx)(n.code,{children:"backend.tf"})," file in the same directory."]}),"\n",(0,i.jsxs)(n.li,{children:["Edit this file ensuring to replace the ",(0,i.jsx)(n.code,{children:"bucket"})," property with the GCS bucket\nname that you created earlier."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you do not wish to use cloud storage to persist terraform state then simply\nswitch the ",(0,i.jsx)(n.code,{children:"backend"})," to some other desirable provider."]}),"\n",(0,i.jsx)(n.h3,{id:"terraform-execution",children:"Terraform Execution"}),"\n",(0,i.jsxs)(n.p,{children:["Terraform enables us to see what it would do if we were to run it without\nactually applying any changes... this is called a ",(0,i.jsx)(n.code,{children:"plan"})," operation. This plan is\nthen enacted (optionally) by an ",(0,i.jsx)(n.code,{children:"apply"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"plan",children:"Plan"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In a terminal which is able to execute the ",(0,i.jsx)(n.code,{children:"tf"})," binary, ",(0,i.jsx)(n.code,{children:"cd"})," to the\n~",(0,i.jsx)(n.code,{children:"my-dijets-project"})," directory that you renamed in step 3 of ",(0,i.jsx)(n.code,{children:"Terraform Configuration"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Execute the command ",(0,i.jsx)(n.code,{children:"tf plan"})]}),"\n",(0,i.jsx)(n.li,{children:"You should see a JSON output to the stdout of the terminal which lays out the\noperations that terraform will execute to apply the intended state."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"apply",children:"Apply"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In a terminal which is able to execute the ",(0,i.jsx)(n.code,{children:"tf"})," binary, ",(0,i.jsx)(n.code,{children:"cd"})," to the\n~",(0,i.jsx)(n.code,{children:"my-dijets-project"})," directory that you renamed in step 3 of ",(0,i.jsx)(n.code,{children:"Terraform Configuration"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Execute the command ",(0,i.jsx)(n.code,{children:"tf apply"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to ensure that terraform does exactly what you saw in the\n",(0,i.jsx)(n.code,{children:"apply"})," output, you can optionally request for the ",(0,i.jsx)(n.code,{children:"plan"})," output to be saved\nto a file to feed to ",(0,i.jsx)(n.code,{children:"apply"}),". This is generally considered best practice in\nhighly fluid environments where rapid change is occurring from multiple sources."]}),"\n",(0,i.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Establishing CI/CD practices using tools such as GitHub and Terraform to manage\nyour infrastructure assets is a great way to ensure base disaster recovery\ncapabilities and to ensure you have a place to embed any ~tweaks you have to\nmake operationally removing the potential to miss them when you have to scale\nfrom 1 node to 10."})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(a,Object.assign({},e,{children:(0,i.jsx)(c,e)}))}}},function(e){e.O(0,[2331,2499,9774,2888,179],(function(){return n=69316,e(e.s=n);var n}));var n=e.O();_N_E=n}]);