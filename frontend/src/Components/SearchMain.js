import React, { useState, useEffect } from "react";
import Axios from "axios";
import Article from "./Article";
import Header from "./Header";
import test_data from "./test_data";

function SearchMain() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [alert, setAlert] = useState("");

  //url for search function
  const url = `http://localhost:8000/answer/?query=${query}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data) {
        return setAlert("No article retrieved for this query.");
      }
      console.log(result);
      setArticles(result.data);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App-header">
      <Header />
      {/*Search Input*/}
      <form onSubmit={onSubmit} className="search-form" htmlFor="search-input">
        <input
          type="text"
          name="query"
          value={query}
          id="search-input"
          placeholder="Search..."
          autoComplete="off"
          onChange={onChange}
        />
        <input type="submit" value="Search" />
      </form>

      <ul className="articles">
        <div className="article">
          <h3>Query:&nbsp;{query}</h3>
        </div>
        {articleSample !== [] &&
          articleSample.map(article => (
            <Article key={article.paper_id} article={article} />
          ))}
      </ul>
    </div>
  );
}

export default SearchMain;

const articleSample = [
  {
    "answer": {
      "score": "83.65808291745608",
      "sents": [
        "Estimating the cure rate and case fatality rate of the ongoing epidemic COVID-19",
        "The epidemic caused by the novel coronavirus in Wuhan at the end of 2019 has become an urgent public event of worldwide concern.",
        "However, due to the changing data of the epidemic, there is no scientific estimate of the cure rate and case fatality rate of the epidemic.",
        "This study proposes a method to estimate the cure rate and case fatality rate of COVID-19.",
        "The ratio of cumulative discharges on a given day to the sum of cumulative discharges on a given day and cumulative deaths before j days is used to estimate the cure rate."
      ]
    },
    "paper_id": "fdf72ec79c428a41c40154e2f2e0611a13837827",
    "doi": "10.1016/j.jag.2006.09.004",
    "title": "Extended model of topological relations between spatial objects in geographic information systems",
    "doc_date": "2007-08-31",
    "authors": [
      "Kimfung.Liu",
      "Wenzhong.Shi"
    ],
    "summary": "",
    "abstract": {
      "text": [
        "This paper presents an extended model for describing topological relations between two sets (objects) in geographic information systems (GIS).",
        " First, based on the definition of the topological relations between two objects, we uncover a sequence of topological relations between two convex sets.",
        "\nSecond, an extended model for topological relations between two sets is proposed based on the new definition.",
        " The topological relations between two convex sets are expressed as a sequence of 4 Â 4 matrices, which are the topological properties of A o \\ B o , A o \\B, B o \\A, @A \\ @B.",
        " The model is also extended for handling the properties of the topological relations between two non-convex sets, where the factor of first fundamental group is added to A [ B to handle these complex relations.",
        "\nThe results show that the number of topological relations between the two sets is not as simple as finite but infinite and can be approximated by a sequence of matrices.",
        " #"
      ],
      "tags": {
        "sciwing": [
          "purpose",
          "method",
          "method",
          "finding",
          "method",
          "finding",
          "others"

        ]
      }
    },
    "bodyText": {
      "section_header": {
        "original": [
          "Introduction",
          "Introduction",
          "Introduction",
          "Introduction",
          "Introduction",
          "Point set topology",
          "Group theory",
          "Group theory",
          "Group theory",
          "First fundamental group",
          "First fundamental group",
          "Definition of topological relations",
          "Definition of topological relations",
          "Definition of topological relations",
          "Definition of topological relations",
          "Definition of topological relations",
          "Line in R 2 has empty interior",
          "Line in R 2 has empty interior",
          "Line in R 2 has empty interior",
          "The extended model for topological relations",
          "The extended model for topological relations",
          "The extended model for topological relations",
          "The extended model for topological relations",
          "The extended model for topological relations",
          "The extended model for topological relations",
          "The extended model for topological relations",
          "The extended model for topological relations",
          "Assumption",
          "Assumption",
          "Assumption",
          "Assumption",
          "Topological relations between convex regions",
          "Topological relations between convex regions",
          "Topological relations between convex regions",
          "Topological relations between convex regions",
          "The topological relations between point, line and convex polygon",
          "The topological relations between point, line and convex polygon",
          "The topological relations between point, line and convex polygon",
          "The topological relations between point, line and convex polygon",
          "Modeling the case of non-convex regions",
          "Extended modeling in the case of non-convex regions",
          "Extended modeling in the case of non-convex regions",
          "Extended modeling in the case of non-convex regions",
          "Extended modeling in the case of non-convex regions",
          "Extended modeling in the case of non-convex regions",
          "Extended modeling in the case of non-convex regions",
          "Extended modeling in the case of non-convex regions",
          "Extended modeling in the case of non-convex regions",
          "The significance of the new model",
          "The significance of the new model",
          "Conclusions and discussions",
          "Conclusions and discussions",
          "Conclusions and discussions",
          "Conclusions and discussions",
          "Conclusions and discussions"
        ],
        "generic": [
          "introduction",
          "introduction",
          "introduction",
          "introduction",
          "introduction",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "conclusions",
          "conclusions",
          "conclusions",
          "conclusions",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "conclusions",
          "conclusions",
          "conclusions",
          "conclusions",
          "conclusions"
        ]
      },
      "text": [
        "Serving as a spatial information management, analysis and presentation system, geographic information systems (GIS) have been applied in many fields for solving spatial-related problems, where spatial analysis and querying are two major GIS functions used for these applications. In order to describe spatial entities in GIS, two aspects are designed in its data structure: (a) description of single objects based on corresponding object elements and (b) description of spatial relations between objects, for example, whether a car moving on the road X or road Y is a matter for a GIS query. To answer this query, we should know the spatial relations between a point (a car in this example) and a line segment (a road in this example). Another example is that a GIS user may request information about the effects of the distribution of Severe Acute Respiratory Syndrome (SARS) in his or her home. In these and other possible GIS queries, topological relations between spatial objects perform a fundamental role and thus, have been identified as a major theoretical issue for research. This issue is also essential for GIS-based spatial analyses. Another major area where topological relations are used is quality control, i.e. to check logical consistence between basic elements of GIS including points, linear features and polygons according to a GIS data model applied. For instance, logical consistence www.elsevier.com/locate/jag International Journal of Applied Earth Observation and Geoinformation 9 (2007) 264-275 between digitized spatial features for corresponding objects can be checked automatically after map digitization based on the topological relations among them. Mathematically, there are many different kinds of topologies with point set topology being the most fundamental one. Both algebraic topology and fuzzy topology have been further developed based on the point set topology. The algebraic topology is the theory of assigning a cohomology group and a fundamental group to the manifold, which helps to classify manifolds. This, in turn, can help us to understand spatial relations between objects in the real world by applying the theory of classification of manifolds. The fuzzy topology is a generalization of the ordinary topology by introducing the membership function (Liu and Luo, 1997) . Fuzzy topology can be used to model fuzzy objects which exist in the real world. Overall, the theory of point set topology has been well developed and many of its theories are well known and useful in solving GIS problems. For example, the structure of the interior, boundary and exterior of a set has been studied.",
        "Many studies have been devoted to examine the topological relations between crisp spatial objects. White (1980) introduced the algebraic topological models for spatial objects. Allen (1983) identified 13 topological relations between 2 temporal intervals. Based on the four-intersection model and ordinary point set theory, Egenhofer and Franzosa (1991) presented topological relations between two spatial regions in two-dimensional (2D) space. Later, Egenhofer (1994) and Clementini and Di Felice (1996) showed an extension of topological relations between spatial objects in 2D space with arbitrary holes. Based on the nine-intersection model, Cohn and Gotts (1996) discovered 46 topological relations between two regions with indeterminate boundaries while Clementini and Di Felice (1996) identified 44 topological relations between two regions with indeterminate boundaries. Tang and Kainz (2001) discovered 44 fuzzy topological relations.",
        "However, the four-intersection model is rather limited because a line should have an empty interior in 2D space even though it is not the case in one-dimensional (1D) space. Unfortunately, this issue has been ignored by the existing models. Furthermore, it is impossible to describe all the possible topological relations between two arbitrary objects, which are theoretically infinite theoretically, with the current limited number of topological models. Some alternative solutions to these problems will be to model these topological relations by using other tools such as an infinite sequence of numbers or matrices.",
        "Geometrically, the basic GIS elements can be classified as point, linear and polygon features. Complex GIS objects can be constructed by a composition of these elements. In this paper, we will focus on the description of topological relations between two connected objects (e.g. line-to-polygon and polygon-to-polygon) in R 2 . For this purpose, we have developed an infinite sequence of numbers or matrices that can be used to describe the topological relations between two objects and provide a more practical solution which may lead to a wider range of applications.",
        "This paper is organized as follows. Section 2 reviews the point set topology and the base concepts of group theory and fundamental group. In Section 3, the nine-intersection models are analyzed. In Section 4, based on the definition of topological relations between two sets, an extended topological relations model will be described in detail. In Section 5, several special cases of topological relations, including line segment to convex region, point-to-point, point-toline, point-to-polygon and line-to-line, will be examined. Section 6 extends the proposed model from convex region to the non-convex region. The significance of this extension to the non-convex case will also be analyzed in this section. Finally, conclusions and discussions on the newly proposed model will be made in Section 7.",
        "Since the models discussed in this paper are based on the theorem of point set topology (Bredon, 1993; Gaal, 1964; Apostol, 1974) , it will be essential to review several related definitions and theorems of this topology. If X is a topological space and A & X, (a) the largest open set U contained in A is called the ''interior'' of A in X and denoted by A o ; (b) the smallest closed set F containing A is called the ''closure'' of A in X and denoted byĀ; (c) the set of the elements in X but not in A is called the complement of A and denoted by A c ; (d) the boundary of A is defined as @A ¼Ā \\ A c . Let X and Y be two topological spaces and f: X ! Y is a mapping, then (a) f is said to be continuous if f À1 (U) is open for each open set U & Y; (b) f is said to be a homeomorphism if both f and f À1 are continuous.",
        "A group G is a finite or infinite set of elements together with a binary operation (called group operation) which together contain four fundamental properties:",
        "(i) Closure, i.e. if A and B are two elements in G, then the product AB is also in G. Definition 2.1. If the group has only one element, then this group is called trivial group.",
        "Example 1. The set of all positive integers (Z) under multiplication form a group and denoted by hZ, *i. Moreover, the Cartesian product of n positive integers (Z Â Z Â Á Á Á Â Z |fflfflfflfflfflfflfflfflfflfflfflffl ffl{zfflfflfflfflfflfflfflfflfflfflfflffl ffl} n terms ) under multiplication form a group and denoted by hZ n , *i.",
        "In mathematics, the fundamental group is one of the basic concepts of algebraic topology. Associated with every point of a topological space, there is a fundamental group that expresses the one-dimensional structure of this space surrounding that given point. This fundamental group is the first homotopy group. The idea of fundamental group will be described in terms of nonmathematics as follows. For a given space, pick a point in it and consider all the loops at this point (see Fig. 1 ). Two loops are considered to be of the same class if there is a continuous deformation (i.e. continuous change without breaking) on the space such that one can be deformed to the other without b. In Fig. 1 , with the base point p, loop 1 and loop 2 are of the same class as they can be deformed to a circle, while loop 3 and loop 4 are of the same class as they can be deformed to a point. The set of all classes of the loops with this method of combining them is the fundamental group and denoted by p 1 . Although, in general, the fundamental group depends on the choice of base point, it turns out that, up to isomorphism, this choice makes no difference if the space X is pathconnected (Armstrong, 1983; Bredon, 1993) . Moreover, in surface space, the first fundamental group measures the one-dimensional hole structure of a space. In Fig. 1 , the first fundamental group of space X is hZ, *i as it is a path connected space and has one and only one hole. In other words, if the space has n holes, then the first fundamental group of the space will be hZ n , *i.",
        "The properties of topological spaces that are preserved under homeomorphism are called topological invariants of spaces. Connectivity, compactness and first fundamental group are several fundamental topological invariants. As these invariants are invariants under bi-continuous mappings (homeomorphisms), studying these invariants can help us to understand their topological relations between spatial objects.",
        "Regarding topological relations, Egenhofer and Franzosa (1994) gave the following definition. Let A 1 , B 1 & X and A 2 , B 2 & Y, then the topological relation between A 1 and B 1 is equivalent to the topological relation between A 2 and B 2 if a homeomorphic map f: X ! Y such that f(A 1 ) = A 2 and f(B 1 ) = B 2 is presented.",
        "From a mathematical point of view, the topological relation is basically an equivalence relation (reflexive, symmetric and transitive), which is simply the partitioning of the relation between two spatial objects into different partitions. In the next two sections, we will discuss the inadequacy of the present model in describing the topological relation between spatial objects based on the above definition.",
        "3. An analysis of the nine-intersection model Egenhofer and Herring (1991) decomposed any region A into three parts: interior (A o ), boundary (@A) and exterior (A c ). The nine-intersection model for the topological relations between two non-empty regions, A and B, was then defined as follows:",
        "ðThe nine-intersection model for the topological relationsÞ",
        "Considering the values of empty and non-empty, there are eight topological relations between two nonempty regions. In fact, this model is inadequate as it is illustrated below.",
        "Let A be a set in R 2 and let x 2 A, x is then called an interior element of A if there is an small open disc D(x, r) in R 2 , such that D(x, r) & A. The interior of a set A in R 2 is defined by the collection of all interior elements in A, denoted by A o . In Fig. 2 (a), point P 1 is an interior element of A while points P 2 and P 3 are not interior elements of A. As shown in Fig. 2(b) , the interior of A is only the region of A excluding the boundary.",
        "A line segment in R 2 has an empty interior (Worboys, 1995) . Indeed, we can pick up an arbitrary point in that line segment, for whatever a small open disc with this point as the center, must contain some points not within this line segment. Thus, by the definition of interior, a line segment in R 2 has an empty interior. One may see this in Fig. 2(c) . As the interior of a line segment in R 2 is empty, it might be inappropriate to say that the intersection between the interior of a line segment and a region is non-empty (Egenhofer and Mark, 1995) , as we have seen in the case of the nine-intersection",
        "A has a non-zero in the first row, where L represents a line segment in R 2 .",
        "By the definition of topological relation between spatial objects (Egenhofer and Franzosa, 1994) , the number of components of TPCO is an invariant property of topological relation. For two sets A, B in R n , the topological components of A and B can be defined as the number of maximum connected components.",
        "As can be seen from Fig. 3 , the number of topological components of @A \\ @B and A o \\ B o are four and two, respectively. As the homeomorphic map f: X ! Y preserves the intersection, interior, exterior, closure and boundary that",
        "f ðĀÞ ¼fðĀÞ and f(@A) = @f(A), the number of components of",
        ". . .g is preserved by homeomorphism. This set is denoted by TPCO.",
        "The numbers of holes and the numbers of components of TPCO are two important topological properties. The numbers of holes refer to the first fundamental group and the numbers of components are the properties of connectivity. One may begin studying the topological relations between spatial objects with these two properties which are the numbers of components and the first fundamental group. It should be noted that not all TPCO are used in studying the topological relation in GIS.",
        "The topological properties of each topological component are described by a sequence of numbers. This sequence of numbers is a series of topological properties, i.e. the number of components and the first fundamental group.",
        "1. Number of components: 0 means no intersection, 1 means one component, 2 means 2 components and so on. 2. The first fundamental group: 0 means the trivial group, 1 means hZ, *i, 2 means hZ 2 , *i and so on.",
        "The meaning of these numbers will be explained as follows. In Fig. 4 The next section aims to identify the useful components of convex non-empty spatial objects which can be used to describe the topological relations between spatial objects.",
        "In the application of GIS, it is essential to make several assumptions either about the phenomena of the real world or about the limited nature of the theorems.",
        "(i) In the real world, all spatial objects are closed and bounded. Thus, all objects are assumed to be bounded and closed. (ii) It is also assumed that non-empty interior regions are regular closed; i.e. A ¼Ā o .",
        "(iii) Under the assumption in (ii), the spatial objects are assumed to be connected. (iv) Under the assumption in (ii), the spatial objects do not contain any holes. (v) Under the assumption in (ii), the non-empty interior regions will be assumed to be convex. Fig. 6(a) shows the case of convex to convex while Fig. 6(b) shows the case of convex to non-convex. The figures illustrate why the case of convex to convex should be considered. Indeed, the fundamental group of A [ B in the case of convex to convex is trivial while the fundamental group of A [ B in the case of non-convex sets may not be trivial.",
        "Remark 1. Under Section 4.1, assumption (i) is a general fact for spatial object in the real case. For (ii), the spatial region is assumed to be regular as the case of spatial region attaching line segment is excluded. For (iii), the meaning of connected is that the object has one and only one component. In modeling topological relations, spatial objects are assumed to be connected, otherwise this object can be treated as two or more connected spatial objects. The assumptions of (iv) and (v) are made based on our focus which is convex regions without holes.",
        "In this section, the topological relations between two convex non-empty interior sets in R 2 will be first investigated. It will be assumed that sets A and B are connected convex non-empty interior sets in R 2 . It is an attempt to discover useful topological parts via ''the number of components'' and ''the first fundamental group'' by using their topological properties.",
        "(i) All topological components of A and B as well as TPCO belong to the trivial group. This means in the case of convex to convex, it is unnecessary to consider the factor of the first fundamental group. (v) If A and B are both non-empty interiors, then the number of components of (A [ B)\\(A \\ B) will depend on the number of components of @A \\ @B.",
        "In other words, if j@A \\ @Bj ! 2 and jA o \\Bj < 1, jB o \\Aj < 1 and j@A \\ @Bj < 1, then jA o \\Bj + jB o \\Aj = j@A \\ @Bj.",
        "If j@A \\ @Bj ! 2, each component of @A \\ @B will correspond to two components of (A [ B)\\(A \\ B). One is on the left-hand side of the outward ray from A o \\ B o to the outside through @A \\ @B (see Fig. 7) , and the other is on the right of the outward ray from A o \\ B o to the outside through @A \\ @B. Therefore, each component of @A \\ @B corresponds to one left component of (A . 9 ).",
        "Geometrically, GIS features can be classified as point, line and polygon features. Because of this, the topological relations between point-to-point, point-toline, point-to-polygon, line-to-line, line-to-polygon and polygon-to-polygon should be described thoroughly. As shown above, the case of polygonto-polygon is rather complicated. Therefore, only Table 1 Topological relations between two convex sets represented by the the topological relations of line-to-polygon, pointto-point, point-to-line, point-to-polygon and line-toline cases will be presented here. The definition of a point in R 2 is simply a coordinate in R 2 and the definition of a line segment will be defined in the same way.",
        "Let P and Q be the end points of a line segment and define a map a:[0, 1] ! R 2 by a(t) = P + t(Q À P), where [0, 1] is a closed interval in R and a(t 1 ) 6 ¼ a(t 2 ) for all t 1 , t 2 2 [0, 1].",
        "We define a o = a((0, 1)), @a = a(0) [ a(1) and a c = R 2 À a([0, 1]), where (0, 1) and [0, 1] are open and closed intervals in R. We decompose any region A into three parts, interior, boundary and exterior, denoted by A o , @A and A c , respectively. Hence, we also define the topological relations between a line segment and a convex non-empty interior region as follows:",
        "ðTopological relations between a line and a regionÞ Based on this definition, nine topological relations between line segment and a convex region are obtained (Table 2) , two topological relations between point and point, three topological relations between point and line segment, three topological relations between point and polygon and five topological relations between polygon and polygon (Table 3) .",
        "The discussion in Section 4 mainly focuses on the modeling of topological relations between convex objects. In real cases, because the GIS objects are not necessarily convex, we should extend our discussion to investigate the case of non-convex regions based on our examination on the properties of the convex case.",
        "Based on the only four useful topological parts A o \\ B o , A o \\B, B o \\A and @A \\ @B, the factor of the fundamental group of A [ B will be considered. It is called the four-intersection-p 1 model; i.e.",
        "where ''È'' is the notation of directed sum, i.e. an additional piece of information of the original. In this paper, some properties of the four-intersection-p 1 model will be discussed. As shown in Fig. 10 , the topological relation of A and B can be represented as 2 2 2 4 Èð1Þ.",
        "The following are some properties of the non-convex case which can be represented by this four-intersectionp 1 model. Table 2 The total number of topological relations between a line segment and a convex region (i) If the representative number of p 1 = 0, i.e. it is a trivial group, then this will reduce the case of convex to convex.",
        "Proof. If p 1 = 0, A [ B does not contain any holes and we apply similar arguments as in (5) and (6) (iii) The boundary of each bounded component of A c \\ B c consists of two parts, @A\\B and @B\\A. Moreover, j@A\\Bj = j@B\\Aj and j@A \\ @Bj = 2 Â j@B\\Aj.",
        "Proof. Since each bounded component of A c \\ B c is bounded by two topological parts, one is @A\\B and one is @B\\A. In addition, each component of each part corresponds to two components of @A \\ @B. & (iv) In R 2 , B A c \\ B c j j¼ the representing number of p 1 .",
        "This shows that it is not necessary to consider the factor of A c \\ B c .",
        "Proof. By (ii) we can see that each component of the bounded component of A c \\ B c is a hole of A [ B. Each hole distributes one of the representative number of p 1 . & (v) Let p 1 = k > 0, then j@A \\ @Bj ! 2k. This is the corollary of (iii) and (iv). (vi) Let {B 1 , B 2 , B 3 , . . ., B n } be the set of all bounded components of A c \\ B c . If j@A \\ @Bj ! 2 and jA o \\Bj < 1, jB o \\Aj < 1, j@A \\ @Bj < 1 and Table 4 ).",
        "In Table 4 , for H ¼ p n m nþ m þ s È ðkÞ : m; n; p; k 2 Z þ and k s max f p i g Â kg, as both A and B are not necessarily convex, the union of A and B ",
        "As pointed out, the topological relation between two sets is not as simple as finite. In fact, it is infinite and can be approximated by a sequence of matrices. This study aims to construct a sequence of topological relations which is infinite. The following is a sequence of different topological relations between two convex nonempty regions. The construction of a kind of sequence of topological relation where the topological relations are equivalent to those between a circle and a regular polygon, with the regular polygon internally tangent to the circle, S ¼ 1 0 n n : n ! 3 has been attempted. These relations are illustrated in Table 5 .",
        "In addition, with this new model, many more relations beyond the topological relations can be identified. For example, the diagram in Fig. 13 represents a piece of land with two kinds of vegetation, grass and forest. The topological relation between grass and forest can be described as 1 0 3 3 Èð0Þ or simply 1 0 3 3 .",
        "Many articles have discussed the topological relations between crisp spatial objects. However, two common problems arise in the existing models. First, most existing intersection models state that a line segment in twodimensional space has non-empty interior. However, a line should have an empty interior in 2D space while it has non-empty interior in one-dimensional space. Therefore when examining intersection relations, one should consider what space the line belongs to. Mathematically, the embedding space should be considered.",
        "Secondly, there are many topological properties and it is inadequate to only consider the empty and nonempty invariants because many other topological properties, such as connectivity, compactness, first fundamental group and subspace topology, can help to identify the topological relations in the use of GIS. In this paper, we have extended the topological relations between GIS objects by considering more topological properties including connectivity and first fundamental group. By considering such invariants, we have obtained a model in which the topological relations can be described by a sequence of matrices which is an infinite sequence of matrices.",
        "In this paper, an extended model for describing topological relations between two spatial objects has Table 5 Infinite sequence of topological relations between two convex regions Fig. 13 . Topological relation between grass and forest. been presented in which the spatial objects can be convex or non-convex. This is based on the topological properties of the topological components. By considering these components (or properties), a sequence of topological relations can be, which is infinity. The proposed model can be immediately applied on the design and implementation of a GIS as shown in the forest-grass topological relations example. The proposed solution can help to represent the topological relations between any two arbitrary objects without holes and connected sets.",
        "The proposed solution has its advantages and the following is a summary of the analysis on the framework.",
        "In the case of convex to convex, only four parts only should be considered. They are A o \\ B o , A o \\B, B o \\A and @A \\ @B. Many topological relations between set A and set B can be well separated by using this model. Because the abstract concepts of topological properties are represented by numbers only, it is easy to systemize. If the topological properties of set A and set B are also considered, they can identify the relations of complex spatial entities such as spatial objects with holes. If all topological properties on each topological component are considered, many more relations can be identified. As the definition of topological relations is abstract, this definition can be extended to a higher dimensional space, for example, a three-dimensional space."
      ],
      "tags": {
        "sciwingI2B2": {
          "1, 2": "Problem",
          "2, 3": "Treatment"
        }
      }
    },
    "url": "https://api.elsevier.com/content/article/pii/S0303243406000419; https://www.sciencedirect.com/science/article/pii/S0303243406000419"
  },
  {
    "answer": {
      "score": "77.49875614652825",
      "sents": [
        "Validation of reported risk factors for disease classification and prognosis in COVID-19: a descriptive and retrospective study",
        "However, the predictive effects of those indicators on disease classification and prognosis remains largely unknown.",
        "We dynamically measured those reported indicators in 132 cases of COVID-19 patients including the moderate-cured (moderated and cured), severe-cured (severe and cured) and critically ill (died).",
        "Our data showed that CRP, PCT, IL-6, LYM%, lactic acid and viral load could predict prognosis and guide classification of COVID-19 patients in different degrees.",
        "CRP, IL-6 and LYM% were more effective than other three factors in predicting prognosis.",
        "For disease classification, CRP and LYM% were sensitive in identifying the types between critically ill and severe (or moderate).",
        "Notably, among the investigated factors, LYM% was the only one that could distinguish between the severe and moderate types."
      ]
    },
    "paper_id": "f53d10b5f8b57b179da04fb8900aec3c32783409",
    "doi": "10.1007/bf01310564",
    "title": "Molecular anatomy of viral RNA-directed RNA polymerases Brief Review Introduction: the R N A g e n o m e s",
    "doc_date": "1994",
    "authors": [
      "A.Ishihama",
      "P.Barbier"
    ],
    "summary": "",
    "abstract": {
      "text": [
        ""
      ],
      "tags": {
        "sciwing": []
      }
    },
    "bodyText": {
      "section_header": {
        "original": [
          "",
          "",
          "A. [shihama and P. Barbier",
          "RNA polymerases of plus-strand RNA viruses",
          "RNA polymerases of single-strand RNA phages",
          "RNA polymerases of single-strand RNA phages",
          "R N A polymerases o f plus-strand animal R N A viruses",
          "R N A polymerases o f plus-strand animal R N A viruses",
          "R N A polymerases o f plus-strand animal R N A viruses",
          "R N A polymerases o f plus-strand animal R N A viruses",
          "Alphavirus RNA polymerase family",
          "Alphavirus RNA polymerase family",
          "Coronavirus RNA polymerase family",
          "Coronavirus RNA polymerase family",
          "RNA polymerases of plus-strand plant viruses",
          "RNA polymerases of plus-strand plant viruses",
          "RNA polymerases of plus-strand plant viruses",
          "RNA polymerases of plus-strand plant viruses",
          "RNA polymerases of plus-strand plant viruses",
          "Mono-and bipartite virus RNA polymerase family",
          "Mono-and bipartite virus RNA polymerase family",
          "Mono-and bipartite virus RNA polymerase family",
          "RNA polymerases of double-strand RNA viruses",
          "RNA polymerases of double-strand RNA phages",
          "RNA polymerases of double-strand animal RNA viruses",
          "RNA polymerases of double-strand animal RNA viruses",
          "RNA polymerases of double-strand animal RNA viruses",
          "RNA polymerases of double-strand plant RNA viruses",
          "RNA polymerases of double-strand plant RNA viruses",
          "RNA polymerases of minus-strand RNA viruses",
          "RNA polymerases of minus-strand RNA viruses",
          "RNA polymerases of minus-strand animal RNA viruses",
          "RNA polymerases of minus-strand animal RNA viruses",
          "RNA polymerases of minus-strand animal RNA viruses",
          "RNA polymerases of minus-strand animal RNA viruses",
          "RNA polymerases of minus-strand animal RNA viruses",
          "RNA polymerases of minus-strand animal RNA viruses",
          "RNA polymerases of minus-strand animal RNA viruses",
          "RNA polymerases of minus-strand animal RNA viruses",
          "RNA polymerases of minus-strand animal RNA viruses",
          "RNA polymerases of minus-strand animal RNA viruses",
          "RNA polymerases of minus-strand plant RNA viruses",
          "RNA polymerases of minus-strand plant RNA viruses",
          "RNA polymerases of ambisense RNA viruses",
          "RNA polymerases of ambisense animal RNA viruses",
          "RNA polymerases of ambisense animal RNA viruses",
          "RNA polymerases of ambisense plant RNA viruses",
          "RNA polymerases of ambisense plant RNA viruses",
          "RNA polymerases of ambisense plant RNA viruses",
          "Molecular architecture of RNA-dependent RNA polymerases",
          "Molecular architecture of RNA-dependent RNA polymerases",
          "Molecular architecture of RNA-dependent RNA polymerases",
          "Molecular architecture of RNA-dependent RNA polymerases",
          "Molecular architecture of RNA-dependent RNA polymerases",
          "Molecular architecture of RNA-dependent RNA polymerases",
          "Evolution of viral RNA-dependent RNA polymerases",
          "Evolution of viral RNA-dependent RNA polymerases",
          "Perspectives"
        ],
        "generic": [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "text": [
        "All cellular organisms contain DNA as the genome, which is transcribed into RNA for gene expression, whereas the RNA genome remains only in the world of viruses. The enzyme, RNA-dependent RNA polymerase, is absolutely required for replication of the RNA genome and it is henceforth called \"RNA replicase'. However, it also functions as \"RNA transcriptase\" to produce mRNA for gene expression. Biochemical characterization of the RNA-dependent RNA polymerase was initiated more than 30 years ago soon after the discovery of RNA phages. In spite of numerous efforts, the purification of RNA polymerase has been successful only for a limited number of bacterial, animal and plant viruses. Difficulty in molecular analysis arose from the low level of viral RNA polymerase production, their low extractability, the instability of enzyme activity, and the complexity of enzyme structure and functions.",
        "Since experimental techniques for gene cloning and nucleic acid sequencing were developed, a new trend in virus research has come of age, relying on interpretation of the nucleotide sequences of the RNA genome. The availability of many RNA polymerase sequences led to recognition of several conserved motifs among the RNA polymerases from different groups of RNA viruses. For instance, a unique three-amino-acid sequence, GDD, is now recognized as a hallmark of viral RNA polymerases. Further, viral RNA polymerases can now be over-produced from cDNA clones, for in vitro analysis of their structure and functions. In addition, the establishment of transfection systems of cDNA and cDNA-directed transcripts provided a new tool for testing in vivo functions. The role of each conserved motif in RNA polymerase molecules can now be examined by a combination of localized mutagenesis of cDNA, in vitro assays using over-produced proteins, and in vivo transfection assays.",
        "This article aims at reviewing of our up-to-date knowledge of the structurefunction relationships in RNA-dependent RNA polymerases from bacterial, animal and plant RNA viruses. Since the replication strategies of the RNA viruses are reflected in the structure and function of the RNA-dependent RNA polymerase, our effort is focussed on the comparison of the RNA polymerases between viruses sharing the same genetic systems, but including bacterial, animal and plant viruses. The viruses largely discussed in this paper are listed in Table 1 . Historical background related to these topics has been described in a previous review [37] , which gives the original references not cited in this review.",
        "The genomic RNA of plus-strand RNA viruses can be directly translated into viral proteins including viral RNA polymerase, which then participates in both of the two-step reactions: viral RNA (vRNA)-directed synthesis of complementary RNA (cRNA) of negative polarity; and cRNA-directed vRNA synthesis. The molecular anatomy of the RNA polymerase from this group viruses has been investigated in three different ways: i) biochemical isolation and characterization of the RNA polymerase from virus-infected cell extracts; ii) cloning and sequence comparison of the RNA polymerase genes; and iii) in vitro mutagenesis of cDNA for the polymerase genes and in vivo transfection assays of cDNA transcripts.",
        "The majority of RNA phages have about 3.5 kb (kilobase)-long plus-strand RNA as the genome. The catalytic subunit, [3, of the enzyme for RNA replication is encoded by the phage genome, but it associates with three bacterial proteins, ribosomal protein S1 (subunit ~), and translation elongation factors Tu (7) and Ts (~) to form the RNA polymerase holoenzyme [8] . Ribosomal protein S1 (~ subunit) carries RNA helicase activity [16] , which may be involved in strandseparation of RNA duplexes formed during RNA replication. In addition a host factor (HF-I) of 11 kDa (kilodalton) is required, but only for the first step of RNA replication, i.e., vRNA-directed cRNA synthesis. The hfq gene coding for HF-I was recently cloned from the E. coli chromosome [41] . The function of this protein in E. coli is not yet known.",
        "There are four groups of RNA phages infecting E. coIi, each serologically distinct from the others (Table 1) . Among the amino acid sequences of the RNA polymerase from MS2 (group I), GA (group II), Q~ (group III) and SP (group IV), there is a great deal of conservation throughout the central region, which suggests the terminal regions are more tolerant to small changes in amino acid sequences than are the internal regions. The consensus YGDD sequence, common to all these RNA phages, also exists in most other viral RNA-dependent RNA polymerases [42] . The pioneering study by Inokuchi and Hirashima [35] showed that amino acid substitutions within this sequence specifically impaired the functions of Q~ polymerase. They also proposed that this motif is involved in the binding o f Z n 2 +, an essential cofactor of all the enzymes involved in nucleic acid synthesis. Recombination of phage RNA takes place by a copy choice mechanism during RNA replication [61] . It is a source of self-replicative variant R N A 238 A. Ishihama and P. Barbier species and of new vRNA-associated sequences such as parts of tRNA [7, 57] . Such variant or unrelated RNA sequences may arise as a result of template switching by the viral RNA polymerase or by the RNA polymerase jumping between templates [37] .",
        "Picornavirus RNA polymerase family Poliovirus, the prototype of the family Picornaviridae, is a plus-strand RNA virus with a genome of about 7.5 kb, which is translated in virus-infected cells into a single large polyprotein precursor. The RNA polymerase core enzyme (the 3D gene product), primer protein VPg, and polyprotein processing protease (3C) are all located in the C-terminal proximal region (region 3) of this precursor polyprotein (Fig. 1) . Processing of the precursor polyprotein also takes place in the membrane fraction, concomitantly with the formation of complexes with transcription and replication activities. The structure of the transcription/replication apparatus is not yet known, except that the 3D protein forms its core.",
        "By treatment of the transcription/replication complex with high concentrations of salt, the 3D polymerase can be solubilized, and exhibits activities of primer-and template-dependent RNA synthesis, such as oligo(U)-dependent poly(A)-directed poly(U) synthesis and oligo(U)-dependent poliovirus RNAdirected minus-strand RNA synthesis (reviewed in [37] ). A viral RNA polymerase with similar functional specicities has also been isolated from the cytoplasm of polio virus-infected cells. Product RNAs in these reactions are covalently linked to the primers added. The primer requirement can be replaced by a host factor with RNA uridylation activity (or terminal uridyltransferase; TUTase). In this case, newly synthesized oligo(U) is covalently linked to the vRNA-poly(A) tail and hybridizes with the poly(A) sequence through a snap-back mechanism, allowing the oligo(U) to serve as a primer for elongation of cRNA chains. As a result the RNA products are twice the size of the template vRNA. The cap structures commonly found in eukaryotic mRNA are absent from the 5' terminus of poliovirus RNA, but instead a small virus-coded protein, VPg, 22 amino acid residues in length, is covalently attached to the vRNA 5' terminus. After infection, VPg is removed from vRNA prior to translation. VPg is attached not only to the vRNA but also to the cRNA. Thus, the VPg may have a signalling function for initiation of RNA synthesis.",
        "The 3D protein expressed in E. coli was found to be active in primer-and template-dependent elongation of RNA chains [55, 63, 73] . This new experimental system became available for detailed systematic analysis of the effect of amino acid substitution in the RNA polymerase (for example see [14] ). Systematic mutagenesis affecting the conserved YGDD sequence of poliovirus RNA polymerase indicated that substitutions of the Tyr and Gly residues gave profound effects on the in vitro enzymatic activity [-38, 39] . Most alteration of these conserved amino acids result in non-functional RNA polymerases. The capability of the mutant 3D polymerases to function in poliovirus replication in vivo was also examined by cDNA transfection assay. Both in vivo and in vitro activities are retained only in a few cases (only Phe can replace Tyr; and only Ala or Ser can replace Gly).",
        "The genomes of flaviviruses resemble those of picornaviruses in the gene organization: the genes encoding seven non-structural proteins are located in the 3' terminal-proximal region (Fig. 1 ). Viral non-structural protein NS5 carries the structural motifs for viral RNA polymerase (Fig. 2) . Although the RNA polymerase has not yet been purified, NS5 is always associated with membrane fractions with the RNA polymerase activity. In spite of the similarity in gene organization between picornaviruses and flaviviruses, the RNA polymerase sequences of ftaviviruses are more closely related to those of alphaviruses than to those of picornaviruses. However, the flavivirus RNA polymerase is more closely related to that of plant luteoviruses [13, 45] .",
        "Most of our current knowledge on the transcription and replication of alphaviruses came from studies of two closely related viruses, Semliki Forest virus (SFV) and Sindbis virus (SND). SND, the prototype virus of the genus alphavirus, contains an l t.7kb plus-strand RNA genome ( Fig. 1) , which is capped and polyadenylated. In sharp contrast to the gene organization found in picornaviruses and flaviviruses, the genes for non-structural proteins are located at the Y-terminal proximal region. Four non-structural proteins (NS1, NS2, NS3 and NS4) are generated after proteolytic processing of two polyprotein precursors, NS123 or NS1234, formed by translation of full-size vRNA. The conserved motifs for viral RNA polymerase are located in NS4 (Fig. 2) , while NS1 carries the sequences involved in RNA capping [17] . Pro-cessing of the polyprotein precursors is catalyzed autolytically by the NS2 protease.",
        "The NS4 RNA polymerase is integrated into transcription/replication complexes associated with the infected cell membranes. This form of NS4 polymerase is metabolically stable, but unassembled RNA polymerase is rapidly degraded by the ubiquitin-dependent pathway, as it carries the N-end rule-based degradation signal or N-degron [19] . Some incomplete SND RNA species contain, at their 5' termini, sequences identical to a cellular tRNA A~p [37] , whereas their 3'-terminal sequences are identical to that of the parental infectious viral RNA. This tRNA species might serve as a primer for vRNA synthesis, but be normally removed at the end of polymerization.",
        "Coronaviruses contain a single molecule of large RNA (more than 20kb in length) of positive-polarity as the genome (Fig. 1 ). The expression of the viral genes takes place through transcription of cRNA into gene-specific subgenomic mRNAs. All mRNA species carry a common sequence at the 5' terminus. This 5' coterminal structure is a transcript of the cRNA 3' terminal region. The RNA polymerase genes of two coronaviruses sequenced so far, avian coronavirus IBV (infectious bronchitis virus) and murine coronavirus (MCV) MH-A59, consists of two ORFs of about 12 (ORFla) and 8 (ORFlb) kb in length, encoded in the 5'-proximal region of vRNA [10, 11] . The complete RNA polymerase is formed by a translation frameshift from the 3' end of ORFla to the 5' end of ORFlb (Fig. 2 ). This process involves specific RNA sequence elements at the ORFla/ORFlb boundary, including an RNA pseudoknot, and efficient ribosome frameshifting takes place even in an in vitro translation'system [12] . This unusual expression strategy of the coronavirus RNA polymerase gene may be related to the generation of a mosaic molecule, with a picornavirus-like N-terminal region and alphavirus-like C-terminal region [45] . The complete translation product of 250 kDa is, however, subsequently cleaved again to yield 28-and 220-kDa functional proteins [5] .",
        "Berne virus (BEV), the prototype of the Toroviridae, is similar to coronaviruses in genome organization and expression mode [77] . Sequence analysis revealed at least five open reading frames on the BEV genome. The amino acid sequence identity between BE¥ and IBV/MHV is the highest in the RNA polymerase gene. The RNA polymerase gene is again split into two ORFs (ORFla and ORFlb) which overlap by 12 nucleotides, indicating that the RNA polymerase protein is translated by ribosomal frameshifting. In contrast to coronaviruses, however, the BEV mRNAs are 3' coterminal but no common leader sequence has been detected at their 5' end.",
        "The vast majority of plant viruses (about 70~o) are plus-strand RNA viruses, which can be broadly divided on the basis of RNA polymerase structure into 242 A. Ishihama and P. Barbier picornavirus-like and alphavirus-like groups [21] . The hypothesis that an RNA-dependent RNA polymerase present in uninfected plant cells is activated by virus infection and is used for virus replication, was disproved by the finding of RNA polymerase genes in the viral genomes (for reviews see [18, 663) . Isolation and characterization of viral RNA polymerases from infected cells, however, have been hindered by two factors: first, the presence of an inducible host RNA-dependent RNA polymerase activity; second, the low extractability of active RNA polymerases from cellular membranes and their tight association with endogenous RNA templates.",
        "Tripartite virus RNA polymerase family",
        "The viral RNA synthesis observed in cell extracts of virus-infected plants involves mainly elongation of preexisting nascent RNA chains. RNA-free RNA polymerases have so far been solubilized and partially purified from plants infected with several tripartite viruses including cowpea chlorotic mottle virus (CCMV) [53] , turnip yellow mosaic tymovirus (TYMV) [56] , brome mosaic virus (BMV) [67] and alfalfa mosaic virus (AMV) [69] . These enzymes are, however, able to catalyze only vRNA-directed cRNA synthesis (the first-step reaction of RNA replication), although the initiation of RNA synthesis depends upon the addition of exogenous vRNA templates. Complete replication in vitro, i.e., the synthesis not only of minus-strand cRNA but also of plus-strand vRNA, has been successfully achieved only in the case of RNA polymerase prepared from cucumber mosaic virus (CMV)-infected tobacco leaves [303. None of these enzymes were, however, pure enough to relate the observed functional difference between different enzyme preparations to any structural difference.",
        "RNA polymerases of tripartite viruses contain two viral proteins, which are encoded in two large vRNA segments. The RNA polymerase prepared from BMV-infected cells, however, contained up to 12 polypeptides, among which two polypeptides corresponded to virus-encoded non-structural proteins, la (the RNA I gene product) and 2a (the RNA 2 gene product) [67] . RNA polymerases encoded by two other tripartite viruses, CCMV and AMV, also contain two gene products: proteins la and 2a (CCMV); and P1 and P2 (AMV), respectively. Sequence comparisons indicate that the RNA 1 product corresponds to the NS1 and NS2 proteins of alphaviruses, while the RNA 2 protein corresponds to NS4 [31 (Fig. 2) . The conserved structural domains for NTP-binding/helicase activities are located in the former, while the GDD motif is present in the latter [23, confirming the requirement of both components for the RNA polymerase functions. The RNA 1 protein also carries a sequence similar to atphavirus NS 1 with the motifs for RNA capping functions. A novel approach has been developed recently for the identification of viral proteins involved in transcription and replication: complementation of a defective virus could be achieved by heterologous expression of viral RNA polymerase proteins in transgenic plants for BMV [54] and AMV [84] .",
        "Besides the two viral coded subunits, several host proteins seem to be associated with transcription/replication complexes. A cellular protein of 50 kDa copurifies along the CMV RNA polymerase [30] and loss of this 50 kDa host factor always correlates with loss of the CMV RNA polymerase activity. The 3' regions of some plant virus RNAs can be folded to form tRNA-like structures which can be aminoacylated by cellular enzymes, and thus any host protein interacting with aminoacyl-tRNA may also bind to aminoacylable viral RNAs. In fact, an affinity-purified 41 kDa protein on BMV 2a protein-column, with stimulation activity of the BMV RNA polymerase, was recently identified as translation elongation factor eIF3 [68] . The successful propagation of a BMV-derived replicon, established in the yeast S. cerevisiae by expressing the BMV RNA polymerase proteins [40] , indicates that any host factor necessary for viral RNA replication must be conserved in evolution. On the other hand, the similarity of the cis-acting sequence at the 5' termini of BMV RNAs with the internal control region of tRNAs raises the possibility that a host RNA polymerase III transcription factor could be the trans-acting factor binding this BMV sequence [49] .",
        "In the mono-and bipartite virus genomes, the.gene for RNA polymerase is encoded in a single RNA molecule. For instance, monopartite tobamoviruses contain a single large RNA molecule as their genome, from which two translation products with the RNA polymerase motifs are formed. In the case of tobacco mosaic virus (TMV), a 126 kDa polypeptide is translated from the vRNA 5'-terminus, while a 183 kDa polypeptide is produced by read-through of the translation termination codon of the 126 kDa protein. The NTP-binding site is located in the 126 kDa protein, but the GDD motif is present only in the C-terminal region of 183 kDa read-through protein (Fig. 2) . In agreement with the sequence analysis, photoaffinity labeling experiments indicated that nucleoside triphosphates can be cross-linked to p126 [24] . A methyltransferase activity was also detected in this polypeptide [23] . Membrane-associated transcription/ replication complexes contain both p126 and p183 [90] . The putative RNA polymerase gene of the monopartite tymovirus TYMV is first translated into a 206 kDa polyprotein, which is then processed into three fragments, an Nterminal 120 kDa protein with the methyltransferase domain, a 30 kDa protein with the helicase motif, and a C-terminal 78 kDa protein with the GDD motif.",
        "Several lines of evidence support the involvement of host factors in the functions of this group RNA polymerases. For example, molecular interaction between TMV RNA polymerase and a host protein encoded by the tomato resistance gene Tml has been suggested, because resistance-breaking mutations maps to p126 [52] .",
        "In the case of dipartite cowpea mosaic virus (CPMV), vRNA segment 1 is translated to yield a polyprotein of 200 kDa, which is then processed into a 58 kDa putative helicase, a 4 kDa VPg and a C-terminal 110 kDa protein with the GDD motif [22] (Fig. 2) . The 110 kDa protein produced using a baculovirus expression system is, however, inactive in RNA synthesis [83] . In virus-infected cells, the 110 kDa RNA polymerase is further processed into the 87 kDa form. At present, it is not known which is the functional form for transcription and replication. As in the case of animal picornaviruses, the replication complexes are tightly associated with the infected cell membranes and the synthesis of VPg-linked RNA is coupled with the polyprotein processing [85] . According to the picornavirus model, a host factor such as uridyltransferase would also be necessary for formation of primers for RNA synthesis.",
        "A small number of bacterial, animal and plant viruses carry double-stranded RNA as their genome. A feature in common to all double-strand RNA viruses is a virion-associated RNA polymerase activity, indicating that viral proteins can not be expressed directly from double-strand vRNAs. The RNA polymerase sequences of double-strand RNA viruses are, however, close to those of plus-strand viruses.",
        "Phage +6 is an enveloped phage carrying three double-strand RNA segments as its genome. It infects a number of phytopathogenic Pseudomonas strains. During phage maturation, the genome RNA segments are packaged into preformed empty particles (or procapsids) consisting of four early viral proteins, P1, P2, P4 and P7. The RNA-filled procapsids, which have RNA polymerase activity, are then coated with a shell of the viral protein PS, to form the nucleocapsids, and concomitantly the RNA polymerase activity is shut off. Uncoating of the nucleocapsids is an essential step in the initial stage of phage infection for the expression of the virion-associated polymerase activity [59] . Transcription of ~6 dsRNA resembles DNA replication, as being semiconservative and in sharp contrast to the conservative transcription mode of reo-and rotaviral double-strand RNA (see below). Protein P2 has some sequence similarity to other viral RNA polymerases. It is present in about 10 to 20 molecules per virion, thus 3 to 7 molecules for each RNA segment. This protein is necessary not only for RNA synthesis but also for packaging of the genome RNA. One possible explanation is that P2 forms complexes with newly synthesized plus-strand copies as an assembly core, to which other capsid proteins associate to form nucleocapsid cores [27] . The synthesis of minus-strand copies may then take place, forming dsRNA, prior to association of the P8 shell. In any case, the P2 protein has dual functions as the catalytic unit for RNA polymerization and the nucleation core for virus assembly.",
        "Three genera of the Reoviridae infect animals, and three genera infect insects and plants. Reoviruses lack an envelope, but instead have an outer capsid composed of hexagonal and pentagonal arrangements of protein subunits. The double-strand RNA genomes of all these genera are divided into ten or more segments. Transcription of the double-strand RNAs is catalyzed by a virion-associated RNA polymerase, expressing its intrinsic enzyme activity only after infection [37] . At early stages of infection, transcription is asymmetric, i.e., only plusstrand RNA is synthesized, and conservative, i.e., the newly synthesized RNA is released without strand separation of the template duplex. The synthesis of progeny double-strand RNA occurs through transcription of the newly synthesized plus-strand RNA as template. This conservative mechanism of doublestrand RNA replication is completely different from the semiconservative replication mode of phage qb6 RNA.",
        "Either heat shock treatment or partial protease digestion allows the virionassociated RNA polymerase to express in vitro its enzymatic activities. K ÷ triggers this switch-on of RNA polymerase functions, while Na + antagonizes it; divalent cations modulate the process. During activation of the coreassociated RNA polymerase, outer capsid proteins are removed. The RNA polymerase activity disappears when virions are completely disrupted. The isolated inner core containing all RNA segments is inactive, suggesting that the RNA polymerase is located inside the core shell and is disassembled after removal of the outer shell. Thus, it has been difficult to isolate the RNA polymerase in an active form [37] .",
        "Bovine rotavirus RNA segment 1 encodes VP1 of 1088 amino acid residues, which carries the conserved sequences of RNA-dependent RNA polymerase [15] , but VP2 encoded by RNA segment 2 is also an essential component of RNA polymerase [48] . VP2 of infectious bursal disease virus (IBDV) carries guanyltransferase and methyl transferase activities [78] .",
        "As in the case of animal viruses, RNA polymerase activity has been found associated with purified particles of Phytoreoviruses [47, 50] , Fijiviruses and Cryptoviruses [1, 9, 51] . Enzymes involved in RNA cap formation such as methyltransferase are also associated with double-strand RNA viruses [71] . Addition of the methyl donor, S-adenosylmethionine, stimulates transcription in vitro, indicating that the reactions of cap formation and RNA synthesis are coupled.",
        "Since the 5' and 3' terminal sequences are conserved between RNA segments of Phytoreoviruses and exhibit some complementarity, they may function as both promoter and origin for transcription and replication, respectively, by the same RNA polymerase. Analysis of these cis-acting signals by site-directed mutagenesis is, however, precluded by the lack of a reconstituted in vitro system.",
        "In this group of single-strand RNA viruses, the presence of RNA polymerase in virions is mandatory to initiate infection, since their RNA genomes are in the anti-sense form, and the genomic RNA cannot serve as mRNA for translation.",
        "Thus, the naked vRNA alone is insufficient to initiate an infection. One of the unique characteristics of the RNA polymerase of negative-strand RNA viruses is that it transcribes the RNA genome only in assembled nucleocapsid form. Negative-strand animal RNA viruses fall into two major groups, one carrying the non-segmented RNA genomes and the other containing segmented RNA genomes. Up to the present time, the RNA polymerase has been purified from vesicular stomatitis virus (VSV) of non-segmented animal RNA viruses and influenza virus of segmented animal RNA viruses.",
        "Rhabdovirus RNA polymerase family Most of the information on transcription and replication of non-segmented viruses has come from studies with VSV, the prototype virus of the Rhabdoviridae. The genome of VSV is a linear single-strand RNA of about 11.2 kb (Fig. 1) . The ribonucleoprotein (RNP) core contains the genome RNA, which is tightly bound with nucleocapsid protein (NP), and two other minor proteins, L (RNA polymerase J3 subunit) and NS (~ subunit). Both L and NS are individually inactive, but when combined, they regain the activity of N-vRNA complexdependent RNA synthesis, indicating that both L and NS are essential subunits of the VSV RNA polymerase holoenzyme (reviewed in [37] ).",
        "The VSV genome contains, reading from the 3' to the 5' terminus, a leader sequence, five genes in the order N-NS-M-G-L, and the 5' untranslated trailer. Using purified virions, five monocistronic mRNAs are synthesized in vitro in a sequential fashion, due to obligatory entry of the RNA polymerase at the promoter located at the 3' end of the vRNA. Two contradictory mechanisms of transcription have been proposed [37] : either the five genes are transcribed into a single polycistronic transcript, which is later processed to monocistronic RNA (\"RNA processing model\"); or transcription is initiated at the beginning of each gene and terminated at its end (\"termination and reinitiation model\"). Transcription initiated from the template 3' terminus is attenuated at the end of the leader sequence, releasing short leader RNA; concurrent encapsidation of these nascent RNAs by the NP protein affects the level of read-through beyond this point. In this connection, it is interesting that the host protein La, a component of ribonucleoprotein complexes made from RNA polymerase III transcripts, specifically binds to this VSV leader RNA [87] .",
        "The product RNAs of in vitro transcription are capped and polyadenylated. Hence, purified VSV virions contain enzyme systems for RNA modification. The RNA modification activities are associated with the RNA polymerase holoenzyme (NS-L or ~[3 complex). The L protein is multifunctional: the catalytic site for RNA polymerization is located on the L protein [60] , and thus the L protein is involved in both transcription and replication; the site on L for polyadenylation is, however, different from the catalytic site for RNA polymerization [-34] , and the site involved in cap formation is also different from the site for RNA synthesis. In addition, the L protein carries a protein kinase activity 248 A. Ishihama and P. Barbier for phosphorylation of the NS protein [75] . Protein phosphorylation controls not only RNA synthesis but also virus uncoating [88] . Since an otigopeptide with the same amino acid sequence as the C-terminal proximal region of NS interferes with transcriptase activity of the L protein [89] , the C-terminal domain of NS may be involved in protein-protein contact with L. Expression of the cDNA clones for both L and NS [76] will enable detailed mapping of the functional sites on these RNA polymerase subunits.",
        "An alternative function of the RNA polymerase is the synthesis of full-length cRNA, which serves as the template for vRNA synthesis. The virus infection cycle involves a balance between the two functions of the RNA polymerase, transcription and replication. Several different mechanisms have been proposed for the switching of RNA polymerase from transcription to replication [37] . The N protein is needed for vRNA to function as the template for RNA synthesis; in addition, excess N associates with nascent RNA products and the formation of N-RNA complexes prevents transcription attenuation, allowing to produce the genome-size read-through cRNA. The NS protein also plays a role in the switching control, because the NS protein interacts not only with L but also with NP. NS is an exceptional protein as to the extent of its pi~osphorylation: there are, in all, 33 potential sites of phosphorylation, 12 threonine and 21 serine residues, which mostly reside in the N-terminal proximal region. The L-NS interaction is controlled by the level of NS phosphorylation. A heavily phosphorylated and extremely acidic N-terminal domain constitutes a novel structure that resembles the phosphate backbone of RNA, to which NP binds tightly. The formation of NS-NP complexes prevents self-aggregation of free NP. Furthermore, NS displaces RNA-bound NP in a localized manner, thereby allowing the RNA polymerase to gain access to the template RNA.",
        "Paramyxovirus infections share many characteristics with those of rhabdoviruses. The RNP cores contain one molecule of non-segmented vRNA, approximately 2500 molecules of NP, 100 300 molecules of P (equivalent to VSV NS) with a molecular weight of 50 55 kDa, and 50-100 molecules of L protein with a molecular weight of about 200 kDa. The functional RNA polymerase is composed of L(~) and P(0t) proteins [37] . The addition of cellular factors stimulate transcription in vitro by detergent-treated paramyxovirus virions or RNP cores isolated from virus particles. Tubulin is a host factor for the RNA polymerase activity associated with VSV and HVJ (Sendai virus). On the other hand, microtubule-associated proteins (MAPs) stimulates in vitro RNA synthesis by HVJ (or Sendai virus). The synthesis and assembly of RNP cores in infected cells take place in association with the cellular cytoskeletal framework.",
        "Orthomyxovirus RNA polymerase family",
        "The genome of influenza virus is composed of one molecule each of eight (A and B type viruses) or 7 (C type virus) RNA segments of negative polarity (Fig. 1) . In the early stages of virus infection, two types of vRNA copy are produced: mRNA with a 5'-cap and 3'-poly(A) tail and full-length cRNA without cap structure and poly(A) tail. At late stages, however, progeny vRNA is synthesized by copying cRNA. The growth of influenza virus is unique because continued synthesis of host cell nuclear RNA is required for viral transcription to occur, as RNA molecules synthesized by RNA polymerase II are used as primers for primary transcription of influenza virus [37] . The first step in capped RNAprimed transcription is the cleavage of existing capped RNA by a \"capped RNA endonuclease\" associated with influenza viral RNA polymerase. Viral RNA polymerase recognizes the cap-t structure at the RNA 5'-end, measures a distance of 10-11 nucleotides from the cap structure, and cleaves next to purine bases or prior to either A or U residues. Transcription of viral genome RNAs is initiated using the resulting capped oligonucleotides as primers. This unusual \"cap snatching mechanism\" of transcription is employed by other enveloped segmented minus-strand RNA viruses and ambisense RNA viruses such as bunyaviruses and arenaviruses. Besides its priming function for viral transcription, the cap-t structure acts as an allosteric effector for activation of virionassociated RNA polymerase.",
        "Virion-associated RNA polymerase catalyzes only mRNA synthesis [58] . Isolated RNP cores with RNA-synthesizing activity contain four virus-specific proteins: NP, which represents over 95~o of the total core proteins, and three P proteins, i.e., two basic, PB 1 and PB2, and one acidic PA protein. The cleavage of capped RNA, primer-dependent initiation of RNA synthesis, elongation of RNA chains, and termination and polyadenylation of the transcripts are all carried out by these complexes. Moreover, the influenza virus RNA potymerase is capable of replacing bases at the growing ends of nascent RNA molecules [36] . Such apparent proof-reading function has never been observed for any RNA polymerases.",
        "Centrifugation of RNP cores in CsC1 leads to dissociation of NP, leaving the P proteins bound to vRNA [33] . The isolated RNA-P protein complexes devoid of NP are active in the synthesis of short RNA chains, but further elongation of RNA chains requires the presence of NP [32] . The dissociation of P proteins can be achieved by centrifugation in CsTFA. The solubilized RNA polymerase is composed of each one of the three P proteins [33] and exhibits RNA synthesis activity dependent on exogenously added templates [62] . Clear evidence for the requirement of all three P proteins for enzymatic activity was given by enzyme reconstitution experiments using individual P proteins, which were isolated from virions by SDS-gel electrophoresis followed by thioredoxin renaturation [81] or purified from insect cells expressing cDNA for each P protein carried on baculovirus vectors [43] .",
        "Chemical cross-linking experiments have been carried out to identify the functional sites. For example, pyridoxat 5'-phosphate (PLP) was cross-linked to PB1, indicating that PB1 has a nucleotide-binding site [72] . Genetic analyses indicate that PBt plays a major role in RNA synthesis, while PB2 is involved in endonucleolytic cleavage of capped RNA. Mutations in the RNA polymerase genes affect virus growth markedly. Hence, the growth attenuation of cold-adapted influenza viruses carry mutations in one of the P protein genes. Likewise, the attenuation of avian influenza viruses in humans is due to the reassortment of one of the genes encoding either RNA polymerase subunits or NP.",
        "Virion-associated RNA-dependent RNA polymerase activity has been found in plant rhabdoviruses. In the case of wheat rosette stunt virus (WRSV) [80] , both detergent-treated virions and isolated nucleocapsids exhibit RNA polymerase activity. Like animal rhabdoviruses, the enzyme activity can be regained upon mixing of L and NS proteins and using N-associated RNA template.",
        "Products synthesized in vitro by the virion-associated RNA polymerase of plant rhabdoviruses contain genome-length and single-strand cRNA, indicating that the RNA polymerase acts not only as transcriptase but also as replicase.",
        "Sequence analysis of RNA virus genomes revealed that a group of viruses previously recognized as minus-strand viruses form a different class, ambisense viruses, including viruses belonging animal bunyaviruses and arenaviruses, and plant bunyaviruses and tenuiviruses. The strategy of gene expression of ambisense viruses is completely different from that of minus-strand viruses as both genome (vRNA) and anti-genome (cRNA) code for specific viral proteins.",
        "Viruses belonging to the Bunyaviridae, the largest family of animal RNA viruses, contain three RNA segments, L, M and S, in their genome. As also noted for the negative-strand viruses, the 3'-and 5'-terminal sequences of the three RNA segments show sequence homology of between 11 to 13 nucleotides, and are complementary to each other, allowing the formation of panhandle structures. RNA polymerase is found associated with virus particles. As in the case of influenza virus transcription, the bunyaviruses employ a cap-snatch mechanism for transcription initiation. These observations altogether indicated that bunyaviruses could be at least negative-strand viruses.",
        "Sequence analysis of the S segment of Punta Toro virus, however, indicated that the 5'-proximal half of S-vRNA codes for a non-structural protein NSs, although the 5'-proximal half of S-cRNA (antigenome RNA) encodes N protein. This type of RNA was proposed to be designated as \"ambisense RNA\", i.e., both vRNA and cRNA carry coding sequences (reviewed in [37] ). Such an ambisense coding strategy was later identified in Pichinde virus, a member of the Arenaviridae. The virus-associated RNA polymerase is responsible for transcription of vRNA to allow expression of cRNA-encoded NSs at early stages of infection. Like the influenza virus RNA polymerase, the RNA polymerase associated with La Crosse virus, a bunyavirus, carries the activities not only of primer-dependent RNA synthesis but also of capped RNA endonuclease. The RNA polymerase has been isolated from none of animal bunyaviruses.",
        "The plant bunyavirus, tomato spotted wilt virus (TSWV), and tenuiviruses, such as rice stripe virus (RSV) and rice grassy stunt virus (RGSV), carry single-strand ambisense RNAs as their genomes (Fig. 1) . In the case of RSV, for example, at least three out of four RNA segments appear to use an ambisense coding strategy [82] . Expression of the putative open reading frames on both vRNA and cRNA strands has been demonstrated using in vitro translation systems [29] .",
        "As with animal ambisense viruses, an RNA polymerase activity is associated with purified virions of tenuiviruses. The only RNA polymerase gene so far sequenced is that of TSWV [20] . Barbier et al. [6] isolated the RNA polymerase activity by CsC1 centrifugation of purified RSV virions. The active fraction contained two viral structural proteins, a 30 kDa nucleocapsid protein and a 230 kDa putative polymerase protein. An in vitro RNA synthesis system was reconstituted using this RNA-free protein fraction and short model templates carrying the conserved 5' and 3' terminal sequences. This showed that, as in the case of influenza virus, a minimum promoter function resides in the panhandle secondary structure formed by the complementary termini cr in the 3' terminal sequence of 11-14 nucleotides in length.",
        "The mechanism and regulation of transcription/replication of ambisense viruses are poorly known. Several lines of evidence indicate that, for gene expression of an ambisense RNA, subgenomic mRNA is formed from each RNA strand; and full-length vRNA and genome-size cRNA are synthesized only during replication. During virus maturation, cRNA is also assembled, albeit with low efficiency into virus particles, which after extraction generates double-strand forms by hybridizing with vRNA.",
        "Amino acid sequence comparisons of viral RNA polymerases have highlighted conserved domains corresponding to the following three sets of functions: RNA polymerase functions including RNA polymerization, nucleoside triphosphate (NTP) binding, and template and product binding [13, 42, 45, 64] , RNA helicase functions for unwinding intramolecular secondary structures or templateproduct intermolecular duplexes [26, 31] ; and RNA capping functions including methyltransferase [74] . These domains are usually composed of several blocks of conserved structural motifs.",
        "The canonical GDD tripeptide originally proposed by Kamer and Argos [42] in the domain for RNA polymerization is now considered to be the hallmark of the viral RNA-dependent RNA polymerases. In many cases, the GDD motif is preceded by Tyr and is located within a hydrophobic amino acid stretch. Sequences surrounding the (Y)GDD motif show some similarity among each group of viruses sharing the same replication strategy. As might be expected from the difference in replication strategies, RNA polymerases from plus-and minus-strand viruses differ in their sequences even in the most conserved GDD motif; the consensus sequence is SDD for segmented minus-strand viruses, and GDN(Q) for unsegmented minus-strand viruses [64] . In contrast, double-strand viruses carry conserved sequences rather similar to those of plus-strand viruses [13, 45] . In the case of RNA-dependent DNA polymerases (or reverse transcriptases), this motif is modified to (Y)MDD.",
        "The RNA helicase and RNA methyltransferase domains of plus-strand viruses are not found in all virus families [28] . For instance, the helicase domain including the GKT/S motif is absent from the small genomes of plant carmo-and sobemoviruses; while the methyltransferase domain is a characteristic N-terminal component of the alphavirus RNA polymerase family, but is not required for RNA viruses which employ the cap-snatch mechanism for transcription initiation.",
        "Poch et al. [65] showed that the RNA polymerase domain is composed of 4 major motifs. Motif A, DxxxxxD, is an acidic motif [corresponding to motif 1 of Bruenn [13] and motif VI of Koonin [45] ]; motif B, GxxxTxxx(N/E)(S/T), is the core motif for nucleotide binding [motif 2 of Bruenn and motif V of Koonin]; motif C, (Y)GDD, is the core motif for catalytic function [motif 3 of Bruenn and motif VI of Koonin]; and motif D, LKR, is a basic motif [motif 6 of Bruenn and motif VII of Koonin]. These motifs are often spaced regularly with more variable hinges, altogether forming a chain of \"concatenated motifs\" [65] .",
        "In the crystal structure of the human immunodeficiency virus type I (HIV-I) reverse transcriptase at 3.5A resolution, the conserved (Y)MDD motif exists on a ~-hairpin in the enzyme active center [44] . Inokuchi et al. (unpubl.) postulated that this motif is involved in metal ion binding at the catalytic site of the enzyme. As demonstrated for phage Q~ and poliovirus RNA polymerases, mutations in this motif result in significant toss of enzymatic activity [35, 38, 39] . However, some viral RNA polymerases carry different amino acid residues at one or two positions within this motif sequence: the Tyr residue in (Y)GDD motif is strictly conserved in picornavirus-like RNA polymerases, but is variable in alphaviruslike RNA polymerases. Substitution of Met for the Tyr residue in the poliovirus (Y)GDD motif results in a loss-of-function mutation, which can be suppressed by an intramolecular secondary mutation [38] . In this position, Cys is found in black beetle virus (BBV) and TMV; Ile is found in SND and Middleburg virus (MDV); Met is found in southern bean mosaic virus (SBMV); and Ser is found in yellow fever virus (YFV), BMV and AMV [4, 65] . In these cases, amino acid changes in the motif may be suppressed by secondary mutations elsewhere within the same molecule.",
        "Two well-conserved sequence motifs have been found to be associated with purine nucleotide triphosphate (NTP)-binding activity [25, 79] , i.e., the first motif A (G/AXXXXGKS/T) and the second motif B (DEAD) occurring approximately 20 40 amino acids downstream (3') from site A. The latter site is believed to interact with the Mg 2+ cation of the Mg-NTP complexes for RNA-or DNA-dependent NTPase activity. Two superfamilies of DNA helicases involved in replication, recombination and DNA repair have been described with consensus features similar to those described here for NTP-binding 1-26, 31].",
        "Sequence comparison of viral RNA polymerases is an approach suitable for defining the phylogenetic relationships between RNA viruses, because all viruses carry the RNA polymerase gene. Rates of evolution of cellular genes average t0-9 substitutions per site per year. On the other hand, RNA viruses evolve at rates a millionfold higher than their hosts with DNA genomes [70] . Quantitative estimation indicates that the error frequency of poliovirus (POL) and vesicular stomatitis (VSV) RNA polymerase ranges from 10 _3 to 10 -4 both in vitro and in vivo. The rapid fixation of mutations in RNA viruses implies, for instance, that the similarity observed between viruses which infect insect vectors and either animal or plant hosts indicates that their divergence took place recently. It can be best explained if all of the viruses in these groups originally infected insect cells and subsequently evolved to infect either plants or animals. Supporting this prediction, plant arboviruses such as plant bunya-and tenuiviruses share regions of sequence similarity with insect-transmitted animal bunyaviruses, arguing for a common origin E20, 82].",
        "Both the gene organization within viral RNA genomes and the sequence organization within single viral genes sometimes display mosaic structures. The fact that different phylogenies are obtained from the amino acid sequences of various viral genes indicates that virus evolution also proceeds by recombination of modules [21] . Recombination by means of RNA polymerase jumping or template switching during replication has been well documented by the RNA sequence analysis of DI RNAs of several viruses, including polioviruses and influenza viruses.",
        "The viral RNA-dependent RNA polymerases are extraordinarily complex, acting as not only RNA replicase but also transcriptase, and catalyzing not only RNA polymerization but also RNA modifications. Sequence analysis of the genes coding for the RNA polymerases from various viruses indicate mosaic structures consisting of multiple functional domains and motifs. The domain organization of RNA polymerase proteins seems to correlate with the strategy of gene expression and replication. Research is being focussed towards two directions: mapping of the functional domains involved in each reaction; and searching for the molecular mechanisms of interconversion between replicase and transcriptase."
      ],
      "tags": {
        "sciwingI2B2": {
        }
      }
    },
    "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7086849/"
  },
  {
    "answer": {
      "score": "75.31819711516434",
      "sents": [
        "From the insight of glucose metabolism disorder: Oxygen therapy and blood glucose monitoring are crucial for quarantined COVID-19 patients",
        "Majority of the COVID-19 patients in China have been cured following the ever-improving treatment methods, and oxygen supplement has been applied as a common treatment strategy for cases in hospitals and cabin hospitals (China National Health Commission).",
        "Since 81% of the confirmed cases are in mild condition with non-or mild pneumonia, most of COVID-19 patients outside China are now recommended for self-cured under home quarantine.",
        "However, it may only take 9 days for the mild COVID-19 patients without effective nursing to develop into serious or critical cases with acute respiratory distress syndrome (ARDS) (Guan et al., 2020; Huang et al., 2020) .",
        "Therefore, it is critical to promote the self-cure rate of the mild cases and prevent the disease from deterioration.",
        "Considering the harmful consequences induced by hypoxemia and advantages of oxygen therapy in controlling glucose metabolism (Handy et al., 2005) , we suggest that adequate oxygen intake is also essential for the newly confirmed or suspected cases under home quarantine."
      ]
    },
    "paper_id": "PMC7126624",
    "doi": "10.1016/j.bios.2006.04.024",
    "title": "DNA hybridization sensor based on aurothiomalate electroactive label on glassy carbon electrodes",
    "doc_date": "2007-01-15",
    "authors": [
      "Alfredo.de la Escosura-Muñiz",
      "María.González-García",
      "Agustín.Costa-García"
    ],
    "summary": "",
    "abstract": {
      "text": [
        ""
      ],
      "tags": {
        "sciwing": []
      }
    },
    "bodyText": {
      "section_header": {
        "original": [
          "Introduction",
          "Introduction",
          "Introduction",
          "Introduction",
          "Introduction",
          "Introduction",
          "Introduction",
          "Introduction",
          "Introduction",
          "Introduction",
          "Introduction",
          "Apparatus and electrodes ::: Experimental",
          "Apparatus and electrodes ::: Experimental",
          "Apparatus and electrodes ::: Experimental",
          "Apparatus and electrodes ::: Experimental",
          "Reagents and solutions ::: Experimental",
          "Reagents and solutions ::: Experimental",
          "Reagents and solutions ::: Experimental",
          "Reagents and solutions ::: Experimental",
          "Reagents and solutions ::: Experimental",
          "Reagents and solutions ::: Experimental",
          "Reagents and solutions ::: Experimental",
          "Reagents and solutions ::: Experimental",
          "Reagents and solutions ::: Experimental",
          "Reagents and solutions ::: Experimental",
          "Labeling of the target strand with sodium aurothiomalate ::: Methods ::: Experimental",
          "Labeling of the target strand with sodium aurothiomalate ::: Methods ::: Experimental",
          "Electrode pre-treatment ::: Methods ::: Experimental",
          "Immobilization of the probe ::: Methods ::: Experimental",
          "Hybridization reaction ::: Methods ::: Experimental",
          "Hybridization reaction ::: Methods ::: Experimental",
          "Recording the analytical signal: catalytic effect of gold on the silver electrodeposition ::: Methods ::: Experimental",
          "Recording the analytical signal: catalytic effect of gold on the silver electrodeposition ::: Methods ::: Experimental",
          "Recording the analytical signal: catalytic effect of gold on the silver electrodeposition ::: Methods ::: Experimental",
          "Single strand DNA labeling ::: Results and discussion",
          "Single strand DNA labeling ::: Results and discussion",
          "Single strand DNA labeling ::: Results and discussion",
          "Single strand DNA labeling ::: Results and discussion",
          "Single strand DNA labeling ::: Results and discussion",
          "Single strand DNA labeling ::: Results and discussion",
          "Single strand DNA labeling ::: Results and discussion",
          "Single strand DNA labeling ::: Results and discussion",
          "Immobilization of the probe ::: Results and discussion",
          "Immobilization of the probe ::: Results and discussion",
          "Immobilization of the probe ::: Results and discussion",
          "Immobilization of the probe ::: Results and discussion",
          "Immobilization of the probe ::: Results and discussion",
          "Immobilization of the probe ::: Results and discussion",
          "Hybridization reaction ::: Results and discussion",
          "Hybridization reaction ::: Results and discussion",
          "Hybridization reaction ::: Results and discussion",
          "Analytical characteristics of the DNA hybridization sensor ::: Results and discussion",
          "Analytical characteristics of the DNA hybridization sensor ::: Results and discussion",
          "Analytical characteristics of the DNA hybridization sensor ::: Results and discussion",
          "Analytical characteristics of the DNA hybridization sensor ::: Results and discussion",
          "Analytical characteristics of the DNA hybridization sensor ::: Results and discussion",
          "Analytical characteristics of the DNA hybridization sensor ::: Results and discussion",
          "Analytical characteristics of the DNA hybridization sensor ::: Results and discussion",
          "Analytical characteristics of the DNA hybridization sensor ::: Results and discussion",
          "Analytical characteristics of the DNA hybridization sensor ::: Results and discussion",
          "Analytical characteristics of the DNA hybridization sensor ::: Results and discussion",
          "Analytical characteristics of the DNA hybridization sensor ::: Results and discussion",
          "Analytical characteristics of the DNA hybridization sensor ::: Results and discussion",
          "Analytical characteristics of the DNA hybridization sensor ::: Results and discussion",
          "Conclusions",
          "Conclusions",
          "Conclusions",
          "Conclusions",
          "Conclusions",
          "Conclusions",
          "Conclusions"
        ],
        "generic": [
          "introduction",
          "introduction",
          "introduction",
          "introduction",
          "introduction",
          "introduction",
          "introduction",
          "introduction",
          "introduction",
          "introduction",
          "introduction",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "method",
          "conclusions",
          "conclusions",
          "conclusions",
          "conclusions",
          "conclusions",
          "conclusions",
          "conclusions"
        ]
      },
      "text": [
        "DNA diagnostic has become an important area of molecular biology and biotechnology studies. The detection of specific base sequences in human, viral and bacterial nucleic acid is becoming increasingly important in several areas, with applications ranging from the detection of disease-causing and food-contaminating organisms to forensic and environmental research.",
        "Conventional methods for the analysis of specific gene sequences are based on either direct sequencing or DNA hybridization methods. Although the DNA sequencing has undergone very big progress in the last decade (Kling, 2003, Kartalov and Quake, 2004, Aborn et al., 2005), these traditional methods, based on the coupling of electrophoretic separations and radioisotopic (32P) detection, are generally labour intensive and time consuming. Therefore, the second option is more commonly used in diagnostic laboratories.",
        "Genosensors (or DNA hybridization biosensors) offer a promising alternative to carry out the specific gene sequence identification (De los Santos-Álvarez et al., 2004, Wang, 2002, Paleček et al., 1998). These biosensors commonly rely on the immobilization of a single-stranded (ss) oligonucleotide probe onto a transducer surface to recognize – by hybridization – its complementary target sequence.",
        "Among the different kind of transducers found in the literature – chemiluminescent (Nguyen and Heffelfinger, 1995), quartz crystal microbalance (Hashimoto et al., 1994, Steel et al., 1998), fiber optical (Piunno et al., 1995), evanescent wave (Watts et al., 1995) or an-acoustic wave (Su et al., 1996) – those based on electrochemical transduction, due to their high sensitivity, small dimensions, low cost and compatibility with micro-fabrication technology provide a very interesting alternative.",
        "These electrochemical biosensing devices can monitor sequence-specific hybridization processes: (i) directly, based on the intrinsic DNA electroactivity (Kerman et al., 2005, Erdem et al., 2004, Ozkan et al., 2002, Lucarelli et al., 2002) or (ii) indirectly by measuring changes in the electrical properties of the electrode–solution interface – electrochemical properties of conducting polymers (Thompson et al., 2003, Cha et al., 2003, Wang et al., 1999), capacitance (Berney et al., 2000) or impedance (Souteyrand et al., 1997, Alfonta et al., 2001) – or using different covalently and non-covalently bound markers.",
        "Non-covalent markers (hybridization indicators) are electroactive compounds – metal complexes (Wang et al., 1997, Zhao and Ju, 2004, Nojima et al., 2003, Kara et al., 2002, Aoki and Umezawa, 2003) or organic compounds (Zhu et al., 2005, Teh et al., 2005, Marrazza et al., 1999, Hashimoto et al., 1998) – that interact in a different way with single strands (ss-) and double strands (ds-) of DNA.",
        "Covalently bound markers can be subdivided in two groups, electroactive and non-electroactive. Ferrocene and its derivatives (Nakayama et al., 2002, Xu et al., 2000, Xu et al., 2001), Pt(II) complex (Hernández-Santos et al., 2005), colloidal gold (Ozsoz et al., 2003, Cai et al., 2002), or tris(2,2′-bipyridyl)cobalt(III)-doped silica nanoparticles (Zhu et al., 2003) are used as electroactive markers, while as non-electroactive marker, the use of enzymes, linked directly to the DNA strand (Zhang et al., 2003, Zhang et al., 2004) or indirectly through biotin–avidin (Abad-Valle et al., 2005, Azek et al., 2000) or fluorescein–antifluorescein bridges (Hernández-Santos et al., 2004), has been extensively reported.",
        "As can be seen, metal complexes and metal nanoparticles have an important role in the development of electrochemical genosensors. In addition to the works cited above, where metal complexes are used as hybridization indicators or electroactive labels, examples of transition metal complexes, e.g. Ru(bpy)3\n2+, Os(bpy)3\n2+, mediating the electro-oxidation of nucleobases, have also been found in literature (Yang et al., 2002, Gore et al., 2003).",
        "In this work, it was used for first time sodium aurothiomalate as electroactive label in a DNA hybridization biosensor. This gold(I) complex has been previously used in our laboratory with success as electroactive label for immunosensor devices using glassy carbon electrodes (GCEs) as electrochemical transducers (de la Escosura-Muñiz et al., 2004a). The electrochemical detection in these immunosensors is based on the catalytic effect of ionic gold on silver electrodeposition (de la Escosura-Muñiz et al., 2004b).",
        "GCEs have been widely used in the construction of electrochemical DNA hybridization biosensors in combination with different oligonucleotides immobilization methods, such as (i) film entrapment using polymers (Wang et al., 1999, Xu et al., 2001, Cai et al., 2002, Zhu et al., 2003), (ii) covalent attachment on functionalized glassy carbon electrodes—polymers, carbon nanotubes, etc. (Zhao and Ju, 2004, Kara et al., 2002, Zhu et al., 2005, Teh et al., 2005, Piro et al., 2005, Cai et al., 2003) or (iii) by electrostatic adsorption on gold colloid modified surfaces (Lin et al., 2002).",
        "Direct adsorption of oligonucleotides onto pre-oxidized glassy carbon electrodes is used in this work, in combination with the electroactive label sodium aurothiomalate for the electrochemical detection of a SARS virus sequence, using a silver catalytic electrodeposition method.",
        "Cyclic voltammetric experiments were performed with an ECO CHEMIE Autolab PGSTAT 10 potentiostat interfaced to a Pentium 120 computer system and controlled by an Autolab GPES Version 4.6 for Windows 98.",
        "All measurements were carried out at room temperature in a 20 mL cell (protected from light) with a three-electrode configuration. Working glassy carbon electrodes (GCEs) were home made, using 3 mm diameter glassy carbon rods (Goodfellow, Spain), sealed into Teflon holders with a spurr resin for electron microscopy purchased from Sigma (Spain). Electrical contact was a brass rod welded to glassy carbon with a silver loaded conductive epoxy resin purchased from Circuit Works (USA). The renewal of the glassy carbon surface was achieved by polishing with 1.0 and 0.3 μm alpha-alumina on a microcloth polishing sheet of 8 in, followed by washing in an ultrasonic Selecta bath for 5 min.",
        "A platinum wire as counter electrode and an Ag/AgCl reference electrode were used.",
        "A Metrohm AG Herisau magnetic stirrer was used for the electrochemical pre-treatment of the electrode surface and the gold electrodeposition and oxidation.",
        "Synthetic 30-mer oligonucleotides were obtained from Eurogentec (Spain). The target sequence employed corresponds to a portion of the severe acute respiratory syndrome (SARS) virus, precisely the bases comprised between 29218 and 29247, both included. For selectivity studies, single-base and three-base-mismatch strands were also purchased. Mismatches are located in bases number 12 and 5, 15 and 26, respectively.Target (50 nmol): 5′-ACA-GAG-CCT-AAA-AAG-GAC-AAA-AAG-AAA-AAG-3′;Thiolated target (50 nmol): 5′-ACA-GAG-CCT-AAA-AAG-GAC-AAA-AAG-AAA-AAG-SH-3′;Single-base-mismatch target (49 nmol): 5′-ACA-GAG-CCT-AAC-AAG-GAC-AAA-AAG-AAA-AAG-3′;Three-base-mismatch target (184 nmol): 5′-ACA-GCG-CCT-AAA-AAC-GAC-AAA-AAG-AGA-AAG-3′;The probe is a complementary strand of the target that was also obtained from Eurogentec. Probe (50 nmol): 5′-CTT-TTT-CTT-TTT-GTC-CTT-TTT-AGG-CTC-TGT-3′.\n",
        "Oligonucleotide solutions were prepared in TE buffer, pH 8 (10 mM Tris–HCl buffer solution, 1 mM in EDTA). Aliquots were prepared and maintained at −20 °C.",
        "Working solutions of the oligonucleotide probe were made in 0.1 M Tris, pH 7.2 buffer, while all gold labeled oligonucleotide target strands were diluted in a 2 × SSC buffer (300 mM sodium chloride/30 mM sodium citrate), pH 7.2. These solutions were conserved at 4 °C. For selectivity studies, oligonucleotide strands were diluted in 2 × SCC buffer or in this buffer containing 50% of formamide. For the labeling procedure, target strands were diluted in an aqueous solution of 0.15 M NaCl with pH adjusted to 7.5 with 0.1 M NaOH.",
        "Sodium aurothiomalate was obtained from Aldrich (Spain). It was reconstituted in 0.15 M NaCl solution and protected from light. Dilutions of this stock solution were prepared daily in an unbuffered aqueous solution of 0.15 M NaCl, with pH adjusted to 7.5 with 0.1 M NaOH.",
        "Tris(hydroxymethyl)aminomethane (Tris) and formamide were purchased from Sigma (Spain). EDTA was obtained from Fluka (Spain).",
        "Silver nitrate was obtained from Sigma (Spain). Solutions were prepared using ultra-pure water and were protected from light.",
        "Analytical grade (Merck, Spain) NaCl, HCl, H2SO4, NH3, KCN, NaOH and sodium citrate were used. Their solutions were prepared with Millipore Milli-Q system, excepting KCN solutions, which were prepared with a 0.1 M NaOH solution.",
        "Ultra-pure water obtained with a Milli-Q plus 185 from Millipore Ibérica S.A. (Spain) was used for all solutions.",
        "Alumina powders of 1.0 and 0.3 μm grain sizes and microcloth polishing sheet of 8 in were purchased from Buehler (Germany).",
        "Dialysis procedures were carried out with Slide-A-Lizer dialysis cassettes, 3500 MWCO from Pierce (USA).",
        "The conjugation of aurothiomalate to single strands was carried out according to the procedure described in a previous work to label immunoglobulins (de la Escosura-Muñiz et al., 2004a). An aliquot of 50 μL of a 200 ng μL−1 target strand solution was mixed with an aliquot of 450 μL of a 390 ng μL−1 sodium aurothiomalate solution. The reaction was carried out at 37 °C for 24 h. After that, the conjugate (strand-Au) was purified by dialysis against 200 mL of 0.15 M NaCl, pH 7.5, unbuffered solution, for 48 h at room temperature.",
        "Thiolated and non-thiolated targets, single-base and three-base-mismatch complementary strands and a non-complementary strand were labeled following this procedure.",
        "The smoothed glassy carbon surfaces were pre-treated before each assay by an electrochemical pre-treatment in 0.1 M HCl. Working electrodes were immersed in a 0.1 M HCl stirred solution and a potential of +1.40 V was applied for 2 min. After that, the electrode surfaces were washed with 0.1 M Tris–HCl, pH 7.2, buffer.",
        "The probe immobilization was performed by physical adsorption, onto the inverted electrode, at room temperature. Five GCEs were used simultaneously and the adsorption was carried out depositing a 50 μL droplet of a 1 ng μL−1 oligonucleotide probe solution on each electrode surface, and left there for 60 min. Then, a washing step was performed with the hybridization buffer solution.",
        "After the probe immobilization and the washing step, the hybridization reaction took place for 30 min with a 30 μL droplet of the complementary gold labeled strand, 2 × SCC buffer pH 7.2 diluted, at room temperature. After that, the electrode surfaces were washed with ultra-pure water.",
        "The same procedure was performed to obtain the background signals, using a gold labeled non-complementary strand, and for selectivity studies with gold labeled single-base and three-base-mismatch complementary strands. For the selectivity studies, 2 × SCC buffer, pH 7.2, and this buffer containing 50% of formamide were used.",
        "The electrodes were immersed in a stirred 0.1 M HCl solution, and the gold, which was bound to the target strand, was electrodeposited on the electrode surfaces by applying a potential of −1.00 V for 5 min. After a washing step with ultra-pure water, the electrodes were immersed in a stirred 0.1 M H2SO4 solution and an oxidation step was carried out applying a potential of +1.40 V for 60 s. After that, the electrodes were rinsed with ultra-pure water and introduced in an unstirred 1.0 M NH3 solution containing silver nitrate at a fixed concentration (2.0 × 10−4\n M) and held at a deposition potential of −0.14 V for 60 s. Then, cyclic voltammograms were scanned from deposition potential to +0.30 V at a scan rate of 50 mV s−1, obtaining the analytical signal. Finally, in order to remove the gold from the electrode surfaces, the GCEs were immersed after each measurement in another cell containing a 0.1 M KCN stirred solution for 2 min in open circuit.",
        "This analytical procedure, based on the catalytic effect of electrodeposited gold on the electroreduction of silver ions (de la Escosura-Muñiz et al., 2004b) has been previously optimized, using bovine serum albumin (BSA) and a rabbit immunoglobulin G (RIgG) labeled with aurothiomalate (de la Escosura-Muñiz et al., 2004a). Briefly, this detection protocol involves a reduction step at −1.00 V in HCl 0.1 M for the gold label electrodeposition on the electrode surface, followed by an oxidation step in 0.1 M H2SO4 necessary to remove the hydrogen generated in the gold deposition step and to oxidize this gold. Then, by selecting an adequate potential (−0.14 V), the silver contained in the solution of AgNO3 2 × 10−4\n M–NH3 1.0 M is reduced to metallic silver only in presence of gold deposited on the electrode surface. Finally, an anodic scan is performed and the reduced silver is oxidized at +0.08 V, which constitutes the analytical signal.",
        "As the amount of silver electrodeposited at this potential is proportional to the gold deposited on the electrode surface, the silver stripping allows the determination of the gold labeled target that has hybridized with the probe. When a non-complementary gold labeled strand is assayed no hybridization takes place, so no gold is deposited on the electrode surface. Thus, no silver is reduced at the chosen deposition potential, and no signal is obtained.",
        "It is well known that sodium aurothiomalate binds to the albumin molecules mainly through the thiol group of the cysteine 34, by exchanging a proton (Moller-Pedersen, 1987). Based on this interaction between gold and thiol, our group has successfully used sodium autothiomalate for labeling different biological molecules, such as BSA and immunoglobulins, in order to design electrochemical metal immunoassays and immunosensors (de la Escosura-Muñiz et al., 2004a).",
        "Thus, this high affinity between gold and thiol group was applied in order to label a thiolated oligonucleotide. The product of the dialysis step was then evaluated by direct adsorption on the electrode surface, previously pre-treated at +1.40 V (versus Ag/AgCl) for 2 min in 0.1 M HCl stirred solution. A 50 μL droplet of a 1 ng μL−1 solution of the thiolated oligonucleotide, after the labeling process, was deposited on the electrode surface and left there for 30 min, before recording the analytical signal.",
        "To verify the gold(I)–oligonucleotide binding and to know if this interaction is through the thiol group, a solution of sodium aurothiomalate 390 ng μL−1 that was not mixed with any oligonucleotide, and a non-thiolated oligonucleotide with identical sequence, were subjected to the same procedure (reaction + dialysis + adsorption).",
        "The results obtained are showed in Fig. 2\n. As it can be seen in this figure, very similar analytical signals were obtained for both, the thiolated (Fig. 2a) and the non-thiolated oligonucleotide (Fig. 2b), while, as it could be expected, no analytical signal was obtained for the aurothiomalate solution assayed (Fig. 2c), because, as it is known by our previous works, sodium aurothiomalate is totally dialysed and anyway, it is not adsorbed on the electrode surface under these experimental conditions. The reproducibility of the signals showed in Fig. 2a and b was checked, using five different GCEs, obtaining a R.S.D. of 8% (n\n = 5, Ip average = 6.6 μA) and 7% (n\n = 5, Ip average = 6.4 μA), respectively.",
        "These results indicate that oligonucleotide is adsorbed on the GCE surface and it has been successfully labeled with sodium aurothiomalate.",
        "The DNA binding properties of sodium aurothiomalate and other gold(I) complexes have been studied by Blank and Dabrowiak (1984) using absorption and circular dichroism spectroscopies. This study concludes that sodium aurothiomalate does not bind to calf thymus DNA, while others gold(I) complexes which have an easily displaced ligand, e.g. Cl− or Br− are capable of interacting in a non-denaturing fashion with the guanine and cytosine residues of calf thymus DNA.",
        "To the best of our knowledge, this is the unique study of gold(I)–DNA complexes that includes sodium aurothiomalate. So, we only have evidence of its not interaction with calf thymus DNA, but we have no information about its binding to ssDNA or to DNA nucleosides.",
        "Therefore, the aurothiomalate–oligonucleotide binding mechanism is not clear, since not only the thiolated strand was labeled, being the interaction not through the thiol group, at least in its totality, as it could be expect. Besides, this fact allows us to label unmodified oligonucleotides which is economically advantageous.",
        "Physical adsorption is used in order to immobilize the oligonucleotide on the pre-oxidized GCE surface at room temperature. The influence of the probe strand concentration and adsorption time on the analytical signal were evaluated following the analytical procedure previously described, using in both cases 30 min of hybridization and 0.1 ng μL−1 gold labeled target solution.",
        "\nFig. 3\nshows the influence of the probe strand concentration on the analytical signal, using an adsorption time of 60 min. The peak current increases with the probe concentration up to 1 ng μL−1, where it reaches a plateau. So, 1 ng μL−1 was chosen for further studies.",
        "A very important fact obtained from this optimization assay is that non-specific adsorptions of the gold labeled target on the electrode surface are not observed for the concentration assayed (0.1 ng μL−1), since when no probe is immobilized, no analytical signal is recorded. The absence of non-specific adsorptions is a very important fact in the development of DNA hybridization sensors, since a blocking step is not needed, which simplifies the procedure, and the sensitivity of the assay is notably improved.",
        "Two factors could be responsible for this fact. One of them is that the gold labeled target concentration is not higher enough to adsorb on the electrode surface in 30 min. The other one is that, although the strand is adsorbed, the low amount of gold deposited on the electrode does not catalyze the silver reduction.",
        "Once the probe concentration was optimized, the effect of the probe adsorption time (from 5 to 90 min) on the analytical signal was evaluated. The obtained results (data not shown) show that the peak current increases upon raising the adsorption time up to 60 min. Beyond this point, the electrode response changes slightly with the adsorption time. Thus, an adsorption time of 60 min is chosen for further studies. Besides of the peak current increase observed with the adsorption time, a better reproducibility of the analytical signal is also obtained when the adsorption time is increased.",
        "Electrostatic adsorption of the oligonucleotide probe was also tested using different times (1–10 min) and potentials (+0.3 to +1.0 V) without success.",
        "After the optimization of the genosensor sensing phase, the hybridization reaction time (between 5 and 60 min) was studied using a 30 μL droplet of a 0.1 ng μL−1 solution of gold labeled target strand in 2 × SCC, pH 7.2, buffer solution. The analytical signal recorded increases with the reaction time, reaching a plateau for a hybridization time of 30 min (data not shown). So, a hybridization time of 30 min is chosen for further studies.",
        "The background signal was also evaluated using a 0.1 ng μL−1 solution of the gold labeled non-complementary strand. When this strand is assayed, no hybridization reaction is expected, so this gold labeled strand will not be captured by the probe immobilized on the electrode surface. As the analytical signal is based on the catalytic effect of electrodeposited gold on the silver electroreduction, when no gold is deposited on the electrode surface, no silver is reduced at the chosen deposition potential, and no signal is obtained.",
        "As can be seen in Fig. 4\n, no hybridization reaction takes place working with the gold labeled non-complementary strand, and a perfect discrimination between complementary (Fig. 4a) and non-complementary (Fig. 4b) strand is obtained under the experimental conditions optimized.",
        "Following the analytical procedure previously described, the higher the concentration of labeled target in solution, the higher is the amount of gold that is electrodeposited, and subsequently, an increase in the analytical signal is obtained.",
        "The peak current showed a good linear relationship with the concentration of gold labeled target prepared in 2 × SCC, pH 7.2, buffer solution, in the range from 10 to 200 pg μL−1, with a correlation coefficient of 0.9984, according to the following equation:Ip (μA)=0.049[target] (pg μL−1)+0.198 (n=5).\n",
        "The limit of detection (calculated as the concentration corresponding to three times the standard deviation of the estimate) of the target strand was 5.0 pg μL−1 (15 fmol in 30 μL).",
        "Background signals, using the gold labeled non-complementary strand, and non-specific adsorption of the gold labeled target were also evaluated. As it was expected in both cases, no analytical signals were obtained working with concentrations between 10 and 200 pg μL−1.",
        "The reproducibility of the analytical signal was checked. Using five different GCEs, a R.S.D. of 10% (n\n = 5, Ip average = 2.1 μA) was obtained for a 50 pg μL−1 solution of the complementary strand.",
        "Finally, it was also evaluated the selectivity of the DNA hybridization sensor, using different concentrations (10, 25, 50, 100 and 200 pg μL−1) of both single-base and three-base-mismatch gold labeled complementary strands prepared in 2 × SCC, pH 7.2, buffer solution. As it is shown in Fig. 5\n, the sensor allows us to discriminate between the complementary strand and the three-base-mismatch complementary strand. However, with the single-base mismatch complementary strand, the analytical signals recorded are similar than those obtained for the complementary strand.",
        "In order to discriminate a single-base-mismatch, other saline concentrations of the hybridization buffer were tested, but the discrimination between single-base-mismatch complementary strand and the target strand was not improved.",
        "More stringent experimental conditions were also tested, adding different concentrations of formamide to the 2 × SCC, pH 7.2, hybridization buffer. It is well known that this molecule makes the hybridization reaction more difficult by decreasing the melting point of DNA.",
        "A concentration of 50% of formamide was necessary to discriminate between single-base-mismatch complementary strand and the target strand. The results obtained for 10, 25, 50, 100 and 200 pg μL−1 strand concentrations are shown in Fig. 6\n. Working with this formamide concentration, the analytical signals obtained for the target strand decrease, while the analytical signals obtained for the three-base-mismatch complementary strand were approaching zero.",
        "Under these more stringent conditions, a new calibration curve was obtained. A linear relationship between peak current and concentration of oligonucleotide target was obtained for concentrations between 10 and 200 pg μL−1, with a correlation coefficient of 0.997, according to the following equation:Ip (μA)=0.016[target] (pg μL−1)+0.0925 (n=5).\n",
        "The limit of detection calculated as described above, was 10 pg μL−1 (30 fmol in 30 μL).",
        "As can be seen, the sensitivity (slope) of the assay decreases under these more stringent conditions, due to the minor peak current recorded for all concentrations of gold labeled target assayed. However, the same linear range from 10 to 200 pg μL−1 were obtained working with both non-stringent and stringent experimental conditions.",
        "The R.S.D. (50 pg μL−1 target strand) for five parallel experiments under these experimental conditions was 8.9% with a mean peak current of 0.84 μA.",
        "This work describes, for the first time, the use of sodium aurothiomalate as electroactive label in a DNA hybridization biosensor.",
        "About the interaction between this gold(I)complex and oligonucleotides, we only can conclude that the presence of a thiol group on the strand, which acts as a binding site for gold in other biological molecules, is not necessary to carry out an effective interaction.",
        "However, the hybridization of gold labeled target strand onto the surface of a probe modified GCE is performed successfully, demonstrating that DNA bases of the target are available for the hybridization after its labeling with the gold(I) complex.",
        "Although the sensitivity of the sensor is lower than that obtained with an enzymatic method on gold band electrodes (Abad-Valle et al., 2005), the analysis time is considerably shorter, since in the enzymatic method, a blocking step, a biotin–streptavidin interaction to link the enzyme to the duplex and an enzymatic reaction are needed before to obtain the analytical signal.",
        "Besides, the sensitivity of this genosensor is competitive with others reported that use Pt(II) complex – 20-mer oligonucleotide (Hernández-Santos et al., 2005) – or tris(2,2′-bipyridil)cobalt(III)-doped silica nanoparticle – 24-mer oligonucleotide (Zhu et al., 2003) – electroactive label; and with others gold nanoparticle-based hybridization assays – 19-mer oligonucleotide (Wang et al., 2001) – that use electrochemical detection.",
        "The reported genosensor is simple, economical and it is able to discriminate single-base mismatch on the target.",
        "Work is in progress trying to elucidate the binding mechanism between aurothiomalate and oligonucleotides and adapting the system to another carbon electrodes in order to improve the sensitivity."
      ],
      "tags": {
        "sciwingI2B2": {
      '0,10': 'problem', '0,11': 'problem', '0,12': 'problem', '0,13': 'problem', '0,14': 'problem', '0,17': 'problem', '0,24': 'problem', '0,37': 'problem', '0,40': 'problem', '0,41': 'problem', '0,43': 'problem', '0,45': 'problem', '0,46': 'problem', '0,47': 'problem', '0,48': 'problem', '0,49': 'problem', '0,51': 'problem', '0,52': 'problem', '0,53': 'problem', '0,68': 'problem', '0,71': 'problem', '0,72': 'problem', '0,77': 'problem', '0,78': 'problem', '0,87': 'problem', '0,88': 'problem', '0,90': 'problem', '0,91': 'problem', '0,107': 'problem', '0,108': 'problem', '0,109': 'problem', '0,115': 'problem', '0,116': 'problem', '0,117': 'problem', '0,121': 'problem', '0,122': 'problem', '0,123': 'problem', '0,125': 'problem', '0,128': 'problem', '0,129': 'problem', '1,0': 'problem', '1,5': 'problem', '1,6': 'problem', '1,8': 'problem', '1,9': 'problem', '1,13': 'problem', '1,14': 'problem', '1,15': 'problem', '1,16': 'problem', '1,17': 'problem', '1,18': 'problem', '1,23': 'problem', '1,24': 'problem', '1,25': 'problem', '1,28': 'problem', '1,37': 'problem', '1,45': 'problem', '1,46': 'problem', '1,51': 'problem', '1,52': 'problem', '1,54': 'problem', '1,66': 'treatment', '1,68': 'treatment', '1,69': 'treatment', '1,70': 'treatment', '1,71': 'treatment', '1,72': 'treatment', '1,74': 'treatment', '1,76': 'treatment', '1,77': 'treatment', '1,78': 'treatment', '1,79': 'treatment', '1,80': 'treatment', '1,82': 'treatment', '1,90': 'problem', '1,91': 'problem', '1,95': 'problem', '1,96': 'problem', '1,105': 'problem', '1,106': 'problem', '1,108': 'test', '1,109': 'test', '1,123': 'problem', '1,124': 'problem', '1,126': 'problem', '1,127': 'problem', '1,128': 'problem', '1,131': 'problem', '1,132': 'problem', '1,133': 'problem', '1,134': 'problem', '1,135': 'problem', '1,139': 'problem', '1,140': 'problem', '1,142': 'problem', '1,143': 'problem', '1,144': 'problem', '1,146': 'problem', '1,147': 'problem', '1,149': 'problem', '1,150': 'problem', '1,151': 'problem', '1,152': 'problem', '1,157': 'problem', '1,158': 'problem', '1,159': 'problem', '1,160': 'problem', '1,162': 'problem', '1,163': 'problem', '1,165': 'problem', '1,166': 'problem', '1,167': 'problem', '1,168': 'problem', '1,173': 'problem', '1,174': 'problem', '1,175': 'problem', '1,176': 'problem', '1,184': 'problem', '1,189': 'problem', '1,190': 'problem', '1,192': 'problem', '1,193': 'problem', '2,0': 'problem', '2,1': 'problem', '2,2': 'problem', '2,4': 'problem', '2,5': 'problem', '2,6': 'problem', '2,7': 'problem', '2,31': 'problem', '2,35': 'test', '2,36': 'test', '2,45': 'problem', '2,70': 'test', '2,71': 'test', '2,73': 'problem', '2,86': 'problem', '2,87': 'problem', '2,90': 'test', '2,91': 'test', '2,93': 'problem', '2,94': 'problem', '2,95': 'problem', '2,96': 'problem', '2,98': 'problem', '2,99': 'problem', '2,100': 'problem', '2,101': 'problem', '2,103': 'problem', '2,105': 'problem', '2,106': 'problem', '2,107': 'problem', '2,113': 'problem', '2,114': 'problem', '2,116': 'problem', '2,117': 'problem', '2,118': 'problem', '2,121': 'problem', '2,122': 'problem', '2,127': 'problem', '2,128': 'problem', '2,136': 'problem', '2,137': 'problem', '2,138': 'problem', '2,139': 'problem', '2,145': 'problem', '2,150': 'problem', '2,155': 'test', '2,156': 'test', '2,167': 'problem', '2,169': 'problem', '2,170': 'problem', '2,171': 'problem', '2,172': 'problem', '2,173': 'problem', '2,174': 'problem', '2,175': 'problem', '2,176': 'problem', '2,178': 'problem', '2,179': 'problem', '2,188': 'problem', '2,189': 'problem', '2,192': 'problem', '2,193': 'problem', '2,194': 'problem', '2,195': 'problem', '2,197': 'problem', '2,199': 'test', '2,200': 'test', '2,201': 'test', '2,202': 'test', '2,209': 'problem', '2,222': 'problem', '2,223': 'problem', '2,224': 'problem', '2,229': 'problem', '2,230': 'problem', '2,236': 'problem', '2,237': 'problem', '3,3': 'problem', '3,4': 'problem', '3,5': 'problem', '3,23': 'problem', '3,24': 'problem', '3,29': 'problem', '3,30': 'problem', '3,31': 'problem', '3,37': 'test', '3,38': 'test', '3,48': 'problem', '3,49': 'problem', '3,50': 'problem', '3,54': 'problem', '3,55': 'problem', '3,60': 'problem', '3,61': 'problem', '3,68': 'problem', '3,69': 'problem', '3,71': 'problem', '3,72': 'problem', '3,73': 'problem', '3,77': 'problem', '3,85': 'problem', '3,86': 'problem', '3,88': 'problem', '3,89': 'problem', '3,97': 'problem', '3,98': 'problem', '3,99': 'problem', '3,100': 'problem', '3,101': 'problem', '3,102': 'problem', '3,103': 'problem', '3,104': 'problem', '3,106': 'problem', '3,116': 'test', '3,117': 'test', '3,122': 'problem', '3,123': 'problem', '3,127': 'problem', '3,128': 'problem', '3,133': 'test', '3,141': 'problem', '3,144': 'problem', '3,148': 'problem', '3,150': 'problem', '3,151': 'problem', '3,152': 'problem', '3,153': 'problem', '3,154': 'problem', '3,156': 'problem', '3,157': 'problem', '4,0': 'problem', '4,1': 'problem', '4,2': 'problem', '4,4': 'problem', '4,5': 'problem', '4,11': 'problem', '4,13': 'problem', '4,15': 'problem', '4,16': 'problem', '4,17': 'problem', '4,23': 'problem', '4,24': 'problem', '4,28': 'problem', '4,30': 'problem', '4,31': 'problem', '4,32': 'problem', '4,33': 'problem', '4,35': 'problem', '4,36': 'problem', '4,45': 'problem', '4,46': 'problem', '4,49': 'problem', '4,50': 'problem', '4,51': 'problem', '4,52': 'problem', '4,54': 'problem', '4,56': 'problem', '4,68': 'problem', '4,69': 'problem', '4,75': 'problem', '4,80': 'problem', '4,81': 'problem', '4,82': 'problem', '5,0': 'treatment', '5,2': 'problem', '5,4': 'test', '5,5': 'test', '5,6': 'test', '5,11': 'problem', '5,12': 'problem', '5,16': 'problem', '5,21': 'treatment', '5,22': 'treatment', '5,24': 'problem', '5,25': 'problem', '5,26': 'problem', '5,31': 'problem', '5,32': 'problem', '5,36': 'treatment', '5,37': 'treatment', '5,38': 'treatment', '5,43': 'treatment', '5,44': 'treatment', '5,57': 'test', '6,0': 'test', '6,1': 'test', '6,7': 'problem', '6,8': 'problem', '6,15': 'test', '6,17': 'test', '6,18': 'test', '6,22': 'treatment', '6,23': 'treatment', '6,25': 'treatment', '6,26': 'treatment', '6,31': 'treatment', '6,32': 'treatment', '6,33': 'treatment', '6,34': 'treatment', '6,35': 'treatment', '6,36': 'treatment', '7,0': 'problem', '7,1': 'problem', '7,2': 'problem', '7,3': 'problem', '7,5': 'problem', '7,6': 'problem', '7,7': 'problem', '7,8': 'problem', '7,16': 'problem', '7,19': 'problem', '7,22': 'problem', '7,24': 'problem', '7,28': 'problem', '7,29': 'problem', '7,31': 'problem', '7,32': 'problem', '7,33': 'problem', '7,36': 'treatment', '7,37': 'treatment', '7,39': 'test', '7,40': 'test', '7,45': 'treatment', '7,46': 'treatment', '7,47': 'test', '7,48': 'test', '7,51': 'test', '7,53': 'problem', '7,54': 'problem', '7,55': 'problem', '7,58': 'treatment', '7,61': 'problem', '7,63': 'test', '7,64': 'test', '7,66': 'problem', '7,68': 'problem', '7,69': 'problem', '7,72': 'treatment', '7,77': 'test', '7,78': 'test', '7,83': 'test', '7,88': 'test', '7,92': 'test', '7,93': 'test', '7,94': 'test', '8,1': 'test', '8,2': 'test', '8,4': 'test', '8,13': 'test', '8,29': 'test', '8,30': 'test', '8,36': 'treatment', '8,52': 'test', '8,53': 'test', '8,58': 'treatment', '8,67': 'treatment', '8,68': 'treatment', '8,70': 'test', '8,71': 'test', '8,73': 'treatment', '8,77': 'test', '8,78': 'test', '8,91': 'test', '8,92': 'test', '8,103': 'test', '8,109': 'test', '8,110': 'test', '8,112': 'test', '8,115': 'problem', '8,117': 'test', '8,118': 'test', '8,120': 'test', '9,6': 'problem', '9,7': 'problem', '9,17': 'problem', '9,21': 'test', '9,22': 'test', '9,28': 'problem', '9,30': 'problem', '9,36': 'test', '9,37': 'test', '9,40': 'treatment', '9,41': 'treatment', '9,43': 'problem', '9,44': 'problem', '9,45': 'problem', '9,46': 'problem', '9,49': 'problem', '9,50': 'problem', '9,51': 'problem', '9,57': 'problem', '9,62': 'treatment', '9,71': 'problem', '9,78': 'problem', '9,80': 'problem', '9,81': 'problem', '9,83': 'treatment', '9,91': 'treatment', '9,92': 'treatment', '9,125': 'treatment', '9,128': 'problem', '9,129': 'problem', '9,130': 'problem', '9,131': 'problem', '9,132': 'problem', '9,133': 'problem', '9,135': 'problem', '9,136': 'problem', '9,138': 'treatment', '9,151': 'test', '9,163': 'treatment', '9,164': 'treatment', '9,166': 'problem', '9,168': 'test', '9,169': 'test', '9,171': 'test', '9,172': 'test', '9,173': 'test', '9,180': 'problem', '9,181': 'problem', '9,184': 'test', '9,185': 'test', '9,187': 'problem', '9,188': 'problem', '9,190': 'problem', '9,191': 'problem', '9,192': 'problem', '9,198': 'problem', '9,200': 'problem', '9,201': 'problem', '9,202': 'problem', '9,203': 'problem', '9,207': 'treatment', '9,218': 'treatment', '9,220': 'problem', '9,221': 'problem', '9,222': 'problem', '9,223': 'problem', '9,229': 'treatment', '9,230': 'treatment', '9,232': 'treatment', '9,233': 'treatment', '9,239': 'test', '9,240': 'test', '9,241': 'test', '9,242': 'test', '9,250': 'treatment', '9,251': 'treatment', '9,252': 'treatment', '9,264': 'test', '9,265': 'test', '9,304': 'problem', '9,305': 'problem', '9,311': 'treatment', '9,312': 'treatment', '9,313': 'treatment', '9,314': 'treatment', '9,315': 'test', '9,316': 'test', '9,329': 'problem', '9,331': 'problem', '9,332': 'problem', '9,336': 'treatment', '9,340': 'problem', '9,341': 'problem', '9,344': 'test', '9,345': 'test', '9,346': 'test', '9,350': 'treatment', '9,352': 'test', '9,353': 'test', '9,359': 'problem', '9,360': 'problem', '9,362': 'problem', '9,363': 'problem', '9,364': 'problem', '9,366': 'test', '9,367': 'test', '9,368': 'test', '9,370': 'test', '9,372': 'problem', '9,374': 'treatment', '9,375': 'treatment', '9,376': 'treatment', '9,377': 'test', '9,378': 'test', '9,389': 'treatment', '9,390': 'treatment', '9,391': 'treatment', '9,400': 'treatment', '9,416': 'problem', '9,425': 'test', '9,426': 'test', '9,434': 'treatment', '9,436': 'treatment', '9,448': 'treatment', '9,449': 'treatment', '9,450': 'test', '9,451': 'test', '9,466': 'test', '9,467': 'test', '9,468': 'test', '9,472': 'problem', '9,474': 'problem', '10,13': 'problem', '10,14': 'problem', '10,18': 'problem', '10,19': 'problem', '10,21': 'test', '10,22': 'test', '10,23': 'test', '10,25': 'test', '10,27': 'test', '10,28': 'test', '10,29': 'test', '10,30': 'test', '10,31': 'test', '10,38': 'problem', '10,40': 'problem', '10,46': 'problem', '10,47': 'problem', '10,55': 'problem', '10,56': 'problem', '10,60': 'problem', '10,61': 'problem', '10,68': 'problem', '10,69': 'problem', '10,70': 'problem', '10,71': 'problem', '10,72': 'problem', '10,74': 'test', '10,75': 'test', '10,85': 'test', '10,86': 'test', '10,89': 'test', '10,90': 'test', '10,91': 'test', '10,92': 'test', '10,97': 'test', '10,98': 'test', '10,100': 'test', '10,101': 'test', '10,102': 'test', '10,103': 'test', '10,105': 'test', '10,108': 'test', '10,109': 'test', '10,113': 'test', '10,114': 'test', '10,115': 'test', '10,116': 'test', '10,117': 'test', '10,121': 'problem', '10,122': 'problem', '10,126': 'test', '10,128': 'problem', '10,129': 'problem', '10,131': 'problem', '10,132': 'problem', '10,133': 'problem', '10,135': 'test', '10,136': 'test', '10,138': 'test', '10,139': 'test', '10,143': 'test', '10,144': 'test', '10,145': 'test', '10,149': 'test', '10,150': 'test', '10,155': 'test', '10,156': 'test', '10,157': 'test', '10,163': 'treatment', '10,164': 'treatment', '10,165': 'treatment', '11,6': 'problem', '11,7': 'problem', '11,23': 'problem', '11,25': 'problem', '11,26': 'problem', '11,32': 'test', '11,33': 'test', '11,39': 'test', '11,40': 'test', '11,41': 'test', '11,42': 'test', '11,45': 'problem', '11,46': 'problem', '11,47': 'problem', '11,49': 'problem', '11,57': 'test', '11,58': 'test', '11,59': 'test', '11,67': 'test', '11,68': 'test', '11,69': 'test', '11,74': 'treatment', '11,75': 'treatment', '11,76': 'treatment', '11,77': 'treatment', '11,78': 'treatment', '11,79': 'treatment', '11,80': 'treatment', '11,81': 'treatment', '11,82': 'treatment', '11,84': 'treatment', '11,85': 'treatment', '11,86': 'treatment', '11,88': 'treatment', '11,89': 'treatment', '11,92': 'treatment', '11,93': 'treatment', '11,94': 'treatment', '11,95': 'treatment', '11,96': 'treatment', '11,97': 'treatment', '11,101': 'test', '11,102': 'test', '11,105': 'problem', '11,106': 'problem', '11,107': 'problem', '11,108': 'problem', '11,109': 'problem', '11,111': 'problem', '11,112': 'problem', '11,120': 'treatment', '11,121': 'treatment', '11,122': 'treatment', '11,125': 'problem', '11,127': 'problem', '11,128': 'problem', '11,130': 'test', '11,131': 'test', '11,136': 'test', '11,137': 'test', '11,139': 'test', '11,144': 'test', '11,145': 'test', '11,146': 'test', '11,147': 'test', '11,148': 'test', '11,150': 'test', '11,151': 'test', '11,152': 'test', '11,153': 'test', '11,154': 'test', '11,157': 'test', '11,158': 'test', '11,159': 'test', '11,161': 'test', '11,162': 'test', '11,163': 'test', '11,164': 'test', '11,165': 'test', '11,167': 'problem', '11,168': 'problem', '11,175': 'test', '11,176': 'test', '11,177': 'test', '12,6': 'problem', '12,7': 'problem', '12,9': 'problem', '12,10': 'problem', '12,12': 'test', '12,14': 'test', '12,15': 'test', '12,16': 'test', '12,18': 'problem', '12,19': 'problem', '12,26': 'treatment', '12,27': 'treatment', '13,0': 'test', '13,1': 'test', '13,3': 'problem', '13,19': 'treatment', '13,20': 'treatment', '13,26': 'treatment', '13,27': 'treatment', '13,37': 'problem', '13,38': 'problem', '13,42': 'problem', '13,45': 'test', '13,46': 'test', '13,47': 'test', '14,0': 'test', '14,1': 'test', '14,2': 'test', '14,3': 'test', '14,4': 'test', '14,5': 'test', '14,6': 'test', '14,7': 'test', '14,14': 'test', '14,15': 'test', '14,23': 'test', '14,24': 'test', '14,25': 'test', '14,29': 'test', '14,30': 'test', '14,31': 'test', '14,32': 'test', '14,33': 'test', '14,43': 'problem', '14,44': 'problem', '14,49': 'test', '14,50': 'test', '14,53': 'test', '14,54': 'test', '14,55': 'test', '14,56': 'test', '14,65': 'test', '14,68': 'test', '14,69': 'test', '14,70': 'test', '14,78': 'test', '14,80': 'problem', '14,84': 'test', '14,85': 'test', '14,86': 'test', '14,87': 'test', '14,88': 'test', '14,90': 'test', '14,91': 'test', '14,92': 'test', '14,97': 'problem', '14,99': 'test', '14,100': 'test', '14,102': 'problem', '14,103': 'problem', '14,104': 'problem', '14,106': 'test', '14,107': 'test', '14,114': 'test', '14,115': 'test', '14,118': 'test', '14,119': 'test', '14,131': 'test', '14,132': 'test', '14,135': 'problem', '14,136': 'problem', '14,138': 'problem', '14,139': 'problem', '14,143': 'test', '14,144': 'test', '14,149': 'test', '14,152': 'problem', '14,155': 'problem', '14,158': 'treatment', '14,159': 'treatment', '14,160': 'treatment', '14,162': 'treatment', '14,163': 'treatment', '14,164': 'treatment', '14,165': 'treatment', '14,168': 'problem', '14,169': 'problem', '14,170': 'problem', '14,175': 'problem', '14,176': 'problem', '14,177': 'problem', '14,178': 'problem', '14,183': 'problem', '14,186': 'problem', '14,187': 'problem', '14,192': 'test', '14,194': 'problem', '14,195': 'problem', '14,196': 'problem', '14,199': 'problem', '14,200': 'problem', '15,0': 'test', '15,1': 'test', '15,2': 'test', '15,3': 'test', '15,10': 'test', '15,11': 'test', '15,12': 'treatment', '15,17': 'test', '15,18': 'test', '15,20': 'test', '15,21': 'test', '15,22': 'test', '15,23': 'test', '15,24': 'test', '15,25': 'test', '15,28': 'test', '15,29': 'test', '15,30': 'test', '15,33': 'treatment', '15,36': 'treatment', '15,37': 'treatment', '15,38': 'treatment', '15,39': 'treatment', '15,40': 'treatment', '15,41': 'treatment', '15,44': 'treatment', '15,45': 'treatment', '15,46': 'treatment', '15,47': 'treatment', '15,48': 'treatment', '15,49': 'treatment', '15,51': 'test', '15,52': 'test', '15,53': 'test', '15,57': 'treatment', '15,58': 'treatment', '15,62': 'test', '15,63': 'test', '15,65': 'treatment', '15,66': 'treatment', '15,67': 'treatment', '15,68': 'treatment', '15,70': 'treatment', '15,71': 'treatment', '15,72': 'treatment', '15,73': 'treatment', '16,0': 'test', '16,1': 'test', '16,13': 'problem', '16,14': 'problem', '16,15': 'problem', '16,18': 'problem', '16,19': 'problem', '16,21': 'test', '16,22': 'test', '16,23': 'test', '16,24': 'test', '16,25': 'test', '16,26': 'test', '16,28': 'test', '16,29': 'test', '16,30': 'test', '16,33': 'test', '16,34': 'test', '16,35': 'test', '16,36': 'test', '16,37': 'test', '16,40': 'problem', '16,41': 'problem', '16,42': 'problem', '16,49': 'test', '16,50': 'test', '16,51': 'test', '16,52': 'test', '16,54': 'problem', '16,56': 'test', '16,58': 'test', '16,59': 'test', '16,68': 'test', '16,69': 'test', '16,70': 'test', '16,72': 'test', '16,73': 'test', '16,86': 'problem', '16,87': 'problem', '16,88': 'problem', '16,90': 'problem', '16,91': 'treatment', '16,92': 'treatment', '16,93': 'treatment', '16,94': 'treatment', '16,101': 'test', '16,103': 'problem', '16,106': 'problem', '16,108': 'problem', '16,115': 'test', '16,116': 'test', '16,117': 'test', '16,118': 'test', '16,120': 'test', '16,121': 'test', '16,122': 'test', '16,124': 'test', '16,125': 'test', '16,126': 'test', '16,127': 'test', '16,129': 'test', '16,130': 'test', '16,134': 'test', '16,135': 'test', '16,139': 'problem', '16,140': 'problem', '16,141': 'problem', '16,142': 'problem', '16,143': 'problem', '16,144': 'problem', '16,147': 'test', '16,148': 'test', '16,149': 'test', '16,150': 'test', '16,152': 'test', '16,158': 'test', '16,159': 'test', '16,160': 'test', '16,165': 'problem', '16,174': 'treatment', '16,175': 'treatment', '16,176': 'treatment', '16,179': 'test', '16,180': 'test', '16,181': 'test', '16,184': 'test', '16,185': 'test', '16,188': 'treatment', '16,189': 'treatment', '16,194': 'treatment', '16,195': 'treatment', '16,196': 'treatment', '16,197': 'treatment', '16,198': 'treatment', '16,199': 'treatment', '16,210': 'test', '16,211': 'test', '17,0': 'test', '17,1': 'test', '17,2': 'test', '17,3': 'test', '17,9': 'test', '17,10': 'test', '17,14': 'test', '17,15': 'test', '17,16': 'test', '17,17': 'test', '17,18': 'test', '17,19': 'test', '17,20': 'test', '17,21': 'test', '17,22': 'test', '17,25': 'test', '17,26': 'test', '17,28': 'test', '17,29': 'test', '17,32': 'problem', '17,33': 'problem', '17,35': 'test', '17,44': 'test', '17,45': 'test', '17,46': 'test', '17,48': 'problem', '17,49': 'problem', '17,52': 'problem', '17,54': 'problem', '17,55': 'problem', '17,61': 'problem', '17,62': 'problem', '17,67': 'test', '17,69': 'test', '17,70': 'test', '17,72': 'test', '17,73': 'test', '17,75': 'test', '17,76': 'test', '17,77': 'test', '17,81': 'test', '17,82': 'test', '17,86': 'test', '17,87': 'test', '17,90': 'test', '17,91': 'test', '17,92': 'test', '17,94': 'test', '17,95': 'test', '17,97': 'treatment', '18,1': 'test', '18,2': 'test', '18,5': 'problem', '18,8': 'problem', '18,23': 'problem', '18,26': 'test', '18,27': 'test', '18,28': 'test', '18,29': 'test', '18,30': 'test', '18,33': 'test', '18,34': 'test', '18,35': 'test', '18,37': 'test', '18,38': 'test', '18,41': 'test', '18,42': 'test', '18,43': 'test', '18,44': 'test', '18,45': 'test', '18,46': 'test', '18,47': 'test', '18,52': 'problem', '18,53': 'problem', '18,55': 'test', '18,56': 'test', '18,58': 'test', '18,63': 'problem', '18,64': 'problem', '18,65': 'problem', '18,69': 'test', '18,70': 'test', '18,74': 'test', '18,75': 'test', '18,76': 'test', '18,77': 'test', '18,78': 'test', '18,85': 'problem', '18,87': 'problem', '18,89': 'problem', '18,91': 'test', '18,92': 'test', '18,95': 'problem', '18,96': 'problem', '18,105': 'problem', '18,112': 'problem', '18,113': 'problem', '18,114': 'problem', '18,115': 'problem', '19,1': 'test', '19,4': 'problem', '19,11': 'test', '19,12': 'test', '19,13': 'test', '19,16': 'problem', '19,18': 'test', '19,19': 'test', '19,20': 'test', '19,21': 'test', '19,22': 'test', '19,26': 'test', '19,27': 'test', '19,29': 'test', '19,30': 'test', '19,32': 'test', '19,33': 'test', '19,35': 'test', '19,36': 'test', '19,38': 'test', '19,39': 'test', '19,40': 'test', '19,41': 'test', '19,43': 'test', '19,45': 'test', '19,46': 'test', '19,47': 'test', '19,48': 'test', '19,52': 'problem', '19,53': 'problem', '19,54': 'problem', '19,56': 'test', '19,57': 'test', '19,58': 'test', '19,59': 'test', '19,60': 'test', '19,62': 'test', '19,63': 'test', '19,65': 'test', '19,66': 'test', '19,70': 'test', '19,71': 'test', '19,72': 'test', '19,73': 'test', '19,74': 'test', '19,75': 'test', '19,76': 'test', '19,77': 'test', '19,78': 'test', '19,79': 'test', '19,85': 'problem', '19,86': 'problem', '19,88': 'test', '19,89': 'test', '19,90': 'test', '19,92': 'problem', '19,93': 'problem', '19,95': 'problem', '19,96': 'problem', '19,97': 'problem', '19,98': 'problem', '19,104': 'problem', '19,105': 'problem', '19,106': 'problem', '19,107': 'problem', '19,111': 'problem', '19,113': 'test', '19,114': 'test', '19,115': 'test', '19,118': 'test', '19,119': 'test', '19,120': 'test', '19,122': 'problem', '19,133': 'problem', '19,134': 'problem', '19,135': 'problem', '19,136': 'problem', '19,137': 'problem', '19,138': 'problem', '19,142': 'test', '19,143': 'test', '19,147': 'test', '19,151': 'test', '20,0': 'test', '20,1': 'test', '20,2': 'test', '20,7': 'problem', '20,8': 'problem', '20,19': 'test', '20,20': 'test', '20,22': 'test', '20,23': 'test', '20,24': 'test', '20,29': 'problem', '20,32': 'problem', '20,33': 'problem', '20,34': 'problem', '20,35': 'problem', '20,40': 'problem', '20,42': 'problem', '20,43': 'problem', '20,47': 'treatment', '20,48': 'treatment', '20,49': 'treatment', '21,4': 'problem', '21,26': 'treatment', '21,28': 'problem', '21,29': 'problem', '21,30': 'problem', '21,31': 'problem', '21,33': 'problem', '21,34': 'problem', '21,35': 'problem', '21,38': 'test', '21,47': 'treatment', '21,51': 'problem', '21,52': 'problem', '21,54': 'problem', '21,55': 'problem', '22,6': 'problem', '22,7': 'problem', '22,10': 'treatment', '22,11': 'treatment', '22,20': 'treatment', '22,28': 'treatment', '22,29': 'treatment', '22,30': 'treatment', '22,38': 'treatment', '22,39': 'treatment', '22,40': 'treatment', '22,51': 'problem', '22,61': 'problem', '22,62': 'problem', '22,63': 'problem', '22,64': 'problem', '22,66': 'problem', '22,67': 'problem', '22,68': 'problem', '22,69': 'problem', '22,70': 'problem', '22,72': 'problem', '22,73': 'problem', '22,77': 'treatment', '22,78': 'treatment', '22,82': 'treatment', '22,83': 'treatment', '22,86': 'problem', '22,87': 'problem', '22,93': 'treatment', '22,94': 'treatment', '22,109': 'treatment', '22,110': 'treatment', '22,122': 'test', '22,123': 'test', '22,134': 'treatment', '22,135': 'treatment', '22,136': 'treatment', '22,144': 'treatment', '22,145': 'treatment', '22,155': 'problem', '22,156': 'problem', '22,157': 'problem', '22,159': 'problem', '22,160': 'problem', '22,161': 'test', '22,162': 'test', '22,164': 'treatment', '22,165': 'treatment', '22,166': 'treatment', '22,168': 'treatment', '22,169': 'treatment', '22,170': 'treatment', '22,174': 'problem', '22,176': 'problem', '22,178': 'problem', '22,185': 'treatment', '22,186': 'treatment', '22,191': 'problem', '22,192': 'problem', '22,193': 'problem', '22,194': 'problem', '22,196': 'treatment', '22,197': 'treatment', '22,198': 'treatment', '22,199': 'treatment', '22,204': 'problem', '22,205': 'problem', '22,207': 'problem', '22,208': 'problem', '22,209': 'problem', '22,214': 'problem', '22,215': 'problem', '22,232': 'problem', '22,234': 'problem', '22,235': 'problem', '22,236': 'problem', '22,243': 'treatment', '22,244': 'treatment', '22,245': 'treatment', '22,246': 'treatment'
        }
      }
    },
    "url": "https://www.ncbi.nlm.nih.gov/pubmed/16762539/; https://api.elsevier.com/content/article/pii/S0956566306002296; https://www.sciencedirect.com/science/article/pii/S0956566306002296",
  }
]